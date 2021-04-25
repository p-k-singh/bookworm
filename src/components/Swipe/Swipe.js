import SwipeCard from './SwipeCard';
import SwipeButtons from './SwipeButtons';

var prop ={
    "name": "(Book Title)",
    "author": "(Author name)",
    "img": "https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png",
    "distance": "(distance)",
    "description": "(Book description)"
  };

const Swipe = () => {
    return (
        <div>
            <SwipeCard props={prop} />
            <SwipeButtons />
        </div>
    );
}
export default Swipe;