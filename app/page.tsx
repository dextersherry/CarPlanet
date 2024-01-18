import { fetchBikes } from "@/utils";
import Image from "next/image";
import { fuels, yearsOfProduction } from "@/constants";
import { BikeCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";
import { BikeProps } from "@/types";

export default async function Home({ searchParams }: BikeProps) {
  const allBikes = await fetchBikes({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allBikes?.map((bike) => (
                <BikeCard bike={bike} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allBikes.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allBikes?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
