import playstation from '../assets/playstation.jpg'

export default function Product() {
  return (
    <div className="container py-6 mt-6 flex justify-center items-center flex-col mx-auto max-w-6xl px-4 md:flex-row">
        <div className="flex-1 w-1/2 md:max-w-sm md:w-full py-4">
            <img src={playstation} className='h-full w-full' alt="product-img" />
        </div>
        <div className="flex flex-1 flex-col space-y-6 p-3 md:px-8">
            <h2 className="font-bold text-4xl">
                Playstation 4 Pro
            </h2>
            <p className="text-xl">
                Availability: <span className="text-bold">In Stock</span>
            </p>
            <div className="text-primary text-3xl font-bold">
                250000 XAF
            </div>
            <div className="flex flex-col space-y-4">
                <h3 className="font-bold text-2xl">
                    Details
                </h3>
                <p className="font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit earum est deleniti voluptatem, necessitatibus ipsum a. Quis voluptas aperiam maiores, enim quas magnam, delectus rerum pariatur consequuntur saepe cumque. Nisi.
                </p>
            </div>
            <div className="flex justify-between max-w-sm">
                <button className='bg-primary rounded px-6 py-2 text-white self-center md:self-start'>
                    Contact seller
                </button>
                <button className='bg-secondary rounded px-6 py-2 text-white self-center md:self-start'>
                    View seller
                </button>
            </div>
        </div>

    </div>
  )
}
