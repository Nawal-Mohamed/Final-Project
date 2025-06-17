import { getStrapiMedia } from "../utils/getStrapiMedia";
import StarRatings from "react-star-ratings";
import { ShoppingCart } from "lucide-react";
import ImageHoverSwitcher from "../CommonComponent/ImageHoverSwitcher";

const ProductCardStrapi = ({ product, onAddToCart }) => {
    if (!product) return null;

    const hasImages = Array.isArray(product.image) && product.image.length > 0;
    const image1 = hasImages ? getStrapiMedia(product.image[0]?.url) : "";
    const image2 = hasImages ? getStrapiMedia(product.image[1]?.url) : "";

    return (
        <div className="p-2 rounded-2xl border border-gray-200 shadow-md relative text-left">
            {product.badge && (
                <span className="absolute z-3 w-17 h-9 top-0 left-0 bg-red-500 text-white p-5 py-2 rounded-tl-2xl rounded-br-3xl text-sm">
                    {product.badge}
                </span>
            )}

            <div className="overflow-hidden rounded-xl group w-30 md:w-48 lg:w-53 h-25 md:h-36 flex justify-center items-center">
                {hasImages ? (
                    <ImageHoverSwitcher images={product.image} title={product.title} />
                ) : (
                    <img
                        src="/placeholder.png"
                        alt="No Image"
                        className="object-cover w-full h-full"
                    />
                )}
            </div>

            {/* Title */}
            <div className="p-3">
                {product.category?.title && (
                    <p className="text-sm text-gray-500 mb-3">{product.category.title}</p>
                )}
                <h2 className="font-semibold text-lg mb-3">{product.title}</h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <StarRatings
                        rating={product.rating || 0}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="5px"
                    />
                    <span className="text-sm text-gray-600">({product.rating || 0})</span>
                </div>

                <div className="mb-3">
                    <p className="text-gray-400 inline-block pr-1">By</p>
                    <h2 className="text-[#4fa56d] font-medium inline-block">{product.by}</h2>
                </div>

                <div className="flex items-center gap-5 mb-3">
                    <div className="flex flex-col">
                        <span className="text-green-600 font-bold text-base">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-gray-500 line-through text-sm">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="inline-flex items-center justify-center gap-2 bg-gray-400 hover:bg-[#4fa56d] text-white px-4 py-2 rounded-md transition"
                    >
                        <ShoppingCart size={18} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCardStrapi;
