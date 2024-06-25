import { notFound } from 'next/navigation';
import { getFigures } from '../../lib/utils';
import VguInFigures from './vgu-in-figures';

  
export default async function ServerVguInFigures() {
    const VguNumbersData = await getFigures();
  
    if (!VguNumbersData) {
      console.error("DEBUG: No VGU Numbers Data found!");
      notFound();
      return null; // Ensure the function returns null if data is not found
    }
  
    return (<VguInFigures figureData={VguNumbersData} />);
  }