// import { AddToCart } from 'components/cart/add-to-cart';
// import Price from "components/price";
// import Prose from "components/prose";
// import { Product } from "lib/shopify/types";

export async function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className='mb-6 flex flex-col border-b pb-6 dark:border-neutral-700'>
        <h1 className='mb-2 text-5xl font-medium'>{product.title}</h1>
        <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
          <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
            <p>
              {product.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </p>
          </div>
        </div>
      </div>

      <p className='mb-6 text-sm leading-tight dark:text-white/[60%]'>{product.description}</p>

      {/* <Suspense fallback={null}> */}
      {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}
      {/* </Suspense> */}
    </>
  )
}
