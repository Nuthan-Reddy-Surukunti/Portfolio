import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const LeatherCraftProGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/projects/leather-craft-pro/main.jpg',
    '/assets/projects/leather-craft-pro/image1.jpg',
    '/assets/projects/leather-craft-pro/image2.jpg',
    '/assets/projects/leather-craft-pro/image3.jpg',
    '/assets/projects/leather-craft-pro/image4.jpg',
    '/assets/projects/leather-craft-pro/image5.jpg',
    '/assets/projects/leather-craft-pro/image6.jpg',
    '/assets/projects/leather-craft-pro/image7.jpg',
    '/assets/projects/leather-craft-pro/image8.jpg',
    '/assets/projects/leather-craft-pro/image9.jpg',
  ];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
  };

  const closeGallery = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mt-8 border-t pt-6 dark:border-gray-700">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        App Screenshots Gallery
      </h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Explore the LeatherCraftPro interface and features through these screenshots. Click on any image to view in full screen.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm hover:shadow-md"
            onClick={() => openGallery(index)}
            style={{ aspectRatio: "9/16", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div className="w-full h-full p-1">
              <img
                src={image}
                alt={`Leather Craft Pro Screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Gallery */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-[60]"
            onClick={closeGallery}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-[60]"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-3xl h-full max-h-[80vh] flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt={`Leather Craft Pro Screenshot ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-80 px-4 py-2 rounded-full text-white shadow-lg z-[60]">
            {currentImageIndex + 1} / {images.length}
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-[60]"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LeatherCraftProGallery;
