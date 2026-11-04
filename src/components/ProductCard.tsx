import cartIcon from "../assets/images/icon-cart.svg";
import productDesktop from "../assets/images/image-product-desktop.jpg";
import productMobile from "../assets/images/image-product-mobile.jpg";

export function ProductCard() {
  return (
    <article>
      <picture>
        <source media="(min-width: 40rem)" srcSet={productDesktop} width={600} height={900} />
        <img
          src={productMobile}
          alt="A bottle of Gabrielle Chanel Paris perfume lying on a white surface beside green leaves"
          width={700}
          height={684}
        />
      </picture>
      <div>
        <p>Perfume</p>
        <h1 className="font-serif">Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </p>
        <p className="font-serif">
          <span className="sr-only">Current price: </span>
          $149.99
        </p>
        <p>
          <span className="sr-only">Original price: </span>
          <s>$169.99</s>
        </p>
        <button type="button">
          <img src={cartIcon} alt="" aria-hidden="true" width={15} height={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
