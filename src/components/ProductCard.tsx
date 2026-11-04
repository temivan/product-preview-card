import cartIcon from "../assets/images/icon-cart.svg";
import productDesktopSrc from "../assets/images/image-product-desktop.jpg";
import productMobileSrc from "../assets/images/image-product-mobile.jpg";

export function ProductCard() {
  return (
    <article className="w-full max-w-87.5 overflow-clip rounded-lg bg-white sm:grid sm:max-w-150 sm:grid-cols-2">
      <picture className="sm:block">
        <source media="(min-width: 40rem)" srcSet={productDesktopSrc} width={600} height={900} />
        <img
          className="block h-auto w-full sm:h-full sm:object-cover sm:object-left"
          src={productMobileSrc}
          alt="A bottle of Gabrielle Chanel Paris perfume lying on a white surface beside green leaves"
          width={700}
          height={684}
        />
      </picture>
      <div className="flex flex-col gap-6 p-8 sm:gap-8">
        <div className="flex flex-col gap-6">
          <p className="text-preset-4 uppercase">Perfume</p>
          <h1 className="text-display text-black">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-preset-3">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-display text-green-500">
            <span className="sr-only">Current price: </span>
            $149.99
          </p>
          <p className="text-preset-5">
            <span className="sr-only">Original price: </span>
            <s>$169.99</s>
          </p>
        </div>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-4 text-preset-2 text-white transition-colors hover:bg-green-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-green-700 motion-reduce:transition-none"
        >
          <span className="grid size-4.5 place-items-center" aria-hidden="true">
            <img src={cartIcon} alt="" width={15} height={16} />
          </span>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
