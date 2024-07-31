import Masonry from 'react-masonry-css';

const MasonryLayout = ({ children }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
    320: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex flex-row-reverse gap-1"
    >
      {children}
    </Masonry>
  );
};

export default MasonryLayout;
