import Image from 'next/image';

function Banner() {
    return (
        <section className="relative h-[300px] sm:h-[350px] lg:h-[400px] xls:h-[450px] 2xl:h-[500px]">
            <Image src="/images/banner.webp" alt="Logotipo Reserva aí"
                   layout="fill"
                   objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <button className="text-purple-3 bg-white px-10 py-4 shadow-md rounded-full font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">Explorar</button>
            </div>
        </section>
    );
}

export default Banner;
