import React, { useState } from 'react';
import { MdOutlineBorderAll } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Categories({ categories, selectedCategory, onSelectCategory }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-start gap-2">
            <div
                className="BrowseAllCategory bg-[#4fa56d] p-3 w-72 h-20 rounded-md flex justify-between items-center gap-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="w-30 h-full flex justify-center items-center gap-1">
                    <MdOutlineBorderAll className="text-white w-6 h-6" />
                    <h1 className="font-semibold text-white">Browse</h1>
                </div>

                <div className="w-20 h-full flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-white">ALL</h1>
                    <h1 className="font-semibold text-white">Category</h1>
                </div>

                <div>
                    {isOpen ? (
                        <IoIosArrowUp className="text-white w-6 h-5" />
                    ) : (
                        <IoIosArrowDown className="text-white w-6 h-5" />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="bg-white w-72 p-4 shadow rounded-md text-sm text-gray-700 space-y-2">
                    {!categories && <p>تحميل التصنيفات...</p>}
                    {categories && categories.length === 0 && <p>لا توجد تصنيفات.</p>}

                    {/* زر "عرض الكل" */}
                    <div
                        onClick={() => {
                            onSelectCategory(null);
                            setIsOpen(false);
                        }}
                        className={`cursor-pointer hover:text-[#4fa56d] ${selectedCategory === null ? "text-[#4fa56d] font-bold" : ""}`}
                    >
                        Show All
                    </div>

                    {/* بقية التصنيفات */}
                    {categories?.map((cat) => (
                        <div
                            key={cat.id}
                            className={`cursor-pointer hover:text-[#4fa56d] ${selectedCategory === cat.title ? "text-[#4fa56d] font-bold" : ""}`}
                            onClick={() => {
                                onSelectCategory(cat.title);
                                setIsOpen(false);
                            }}
                        >
                            {cat.title || "تصنيف غير معرف"}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
