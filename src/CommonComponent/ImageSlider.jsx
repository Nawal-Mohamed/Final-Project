<div className="relative w-full h-64 overflow-hidden rounded-xl">
    <img
        src={getStrapiMedia(item.image?.[0]?.url)}
        alt={item.title}
        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
    />
    {item.image?.[1] && (
        <img
            src={getStrapiMedia(item.image?.[1]?.url)}
            alt={item.title}
            className="w-full h-full object-cover absolute top-0 left-0"
        />
    )}
</div>
