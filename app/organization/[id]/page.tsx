
import { getChildDepartments, getDepartmentMembers } from '@/app/lib/utils';

import DepartmentClient from './client-component';


export default async function Page({params}: any) {
    var pageID = params.id;
    var membersData = await getDepartmentMembers(pageID);
    var childDeptData = await getChildDepartments(pageID);
    return (
        <main>
            
            <DepartmentClient membersData={membersData} childDeptData={childDeptData}/>
            
        </main>

    )

    
}