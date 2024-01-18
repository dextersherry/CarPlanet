import { fuels } from "@/constants";
import { BikeProps, FilterProps } from "@/types";

export async function fetchBikes(filters :FilterProps){
    const{ manufacturer,model,fuel,limit ,year} = filters;
    const headers = {
		'X-RapidAPI-Key': 'c997a9a147msh50b6f3b24717a8cp15d3b6jsn1449c3ca5808',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response= await fetch(` https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
        headers: headers,
    });
const result = await response.json();
return result;
}



export const calculateBikeRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = (city_mpg )* mileageFactor;
    const ageRate = (new Date().getFullYear() - (year)) * ageFactor;
  
    // Calculate total rental rate per day
    let rentalRatePerDay = ((basePricePerDay + mileageRate + ageRate)*100);

    if (isNaN(rentalRatePerDay)) {
        rentalRatePerDay = 2500;
    }
  
    return rentalRatePerDay.toFixed(0);
  };


  export const generateCarImageUrl =(bike: BikeProps,angle?
    : string) => {
        const url = new URL('https://cdn.imagin.studio/getimage');
        const {make, model,year} =bike;
        url.searchParams.append('customer','hrjavascript-mastery')
        url.searchParams.append('make',make);
        url.searchParams.append('modelFamily', model.split(' ')[0]);
        url.searchParams.append('zoomType','fullscreen');
        url.searchParams.append('modelYear',`${year}`);
        url.searchParams.append('angle',`${angle}`);
        url.searchParams.append('color','color');

         return `${url}`;

    // key daefd14b-9f2b-4968-9e4d-9d4bb4af01d1
  }


  export const updateSearchParams =(type:string,value:string)=>{
    
    const searchParams =new URLSearchParams(window.location.search);
    searchParams.set(type,value);
    const newPathname =`${window.location.pathname}?${searchParams.toString()}`
    return newPathname;
  }

 