#!/usr/bin/env bash
# Use this script to test if a given TCP host/port are available

TIMEOUT=15
QUIET=0

echoerr() { if [[ "$QUIET" -ne 1 ]]; then echo "$@" 1>&2; fi }

usage()
{
    cat << USAGE >&2
Usage:
    $0 host:port [-t timeout] [-- command args]
    -q | --quiet                        Do not output any status messages
    -t TIMEOUT | --timeout=timeout      Timeout in seconds, zero for no timeout
    -- COMMAND ARGS                     Execute command with args after the test finishes
USAGE
    exit 1
}

wait_for()
{
    if [[ "$TIMEOUT" -gt 0 ]]; then
        echoerr "$0: waiting $TIMEOUT seconds for $HOST:$PORT"
    else
        echoerr "$0: waiting for $HOST:$PORT without a timeout"
    fi
    start_ts=$(date +%s)
    while :
    do
        if [[ "$ISBUSY" -eq 1 ]]; then
            nc -z $HOST $PORT
            result=$?
        else
            (echo > /dev/tcp/$HOST/$PORT) >/dev/null 2>&1
            result=$?
        fi
        if [[ $result -eq 0 ]]; then
            end_ts=$(date +%s)
            echoerr "$0: $HOST:$PORT is available after $((end_ts - start_ts)) seconds"
            break
        fi
        sleep 1
    done
    return $result
}

wait_for_wrapper()
{
    # In order to support SIGINT during timeout: http://unix.stackexchange.com/a/57692
    if [[ "$QUIET" -eq 1 ]]; then
        timeout $BUSYTIMEFLAG $TIMEOUT $0 $HOST:$PORT --quiet --child --timeout=$TIMEOUT &
    else
        timeout $BUSYTIMEFLAG $TIMEOUT $0 $HOST:$PORT --child --timeout=$TIMEOUT &
    fi
    PID=$!
    trap "kill -INT -$PID" INT
    wait $PID
    RESULT=$?
    if [[ $RESULT -ne 0 ]]; then
        echoerr "$0: timeout occurred after waiting $TIMEOUT seconds for $HOST:$PORT"
    fi
    return $RESULT
}

# Process arguments
while [[ $# -gt 0 ]]
do
    case "$1" in
        *:* )
        HOSTPORT=(${1//:/ })
        HOST=${HOSTPORT[0]}
        PORT=${HOSTPORT[1]}
        shift 1
        ;;
        -q | --quiet)
        QUIET=1
        shift 1
        ;;
        -t)
        TIMEOUT="$2"
        if [[ "$TIMEOUT" == "" ]]; then break; fi
        shift 2
        ;;
        --timeout=*)
        TIMEOUT="${1#*=}"
        shift 1
        ;;
        --)
        shift
        CHILD=1
        break
        ;;
        -*)
        echoerr "Unknown option: $1"
        usage
        ;;
        *)
        EXTRA_ARGS="$EXTRA_ARGS $1"
        shift
        ;;
    esac
done

if [[ "$HOST" == "" || "$PORT" == "" ]]; then
    echoerr "Error: you need to provide a host and port to test."
    usage
fi

ISBUSY=0
if busybox >/dev/null 2>&1; then
    ISBUSY=1
    BUSYTIMEFLAG=""
    if timeout --help 2>&1 | grep -q -i -E 'BusyBox'; then
        BUSYTIMEFLAG="-t"
    fi
fi

if [[ $CHILD -gt 0 ]]; then
    wait_for
    RESULT=$?
    exit $RESULT
else
    if [[ "$TIMEOUT" -gt 0 ]]; then
        wait_for_wrapper
        RESULT=$?
    else
        wait_for
        RESULT=$?
    fi
fi

if [[ "$CHILD" -eq 0 && "$EXTRA_ARGS" != "" ]]; then
    exec $EXTRA_ARGS
else
    exit $RESULT
fi
