import React, { useState } from "react";

import "./SwipeCard.css";
import TinderCard from 'react-tinder-card';



function SwipeCard(props){
    // const [books, setBooks] = useState([]); 
    // var query = props.props;
    // setBooks(books => [...books, query]);
    const book = props.props;
    return (
        <div>
            <div className="swipeCard_cardContainer">

                {/* {books.map((book) => ( */}
                    <TinderCard className="swipecard" preventSwipe={["up","down"]}>

                        <div style={{ backgroundImage: `url(${book.img})` }} className="card">
                        
                            <h2>{book.name}</h2>
                            <p>Author : {book.author}</p>
                            <p>{book.description}</p>
                            <p>{book.distance} kms away</p>

                        </div>

                    </TinderCard>
                {/* ) )} */}

            </div>
        </div>
    );

}

export default SwipeCard;

// const onSwipe = (direction) => {
//     console.log('You swiped: ' + direction)
// }

// const onCardLeftScreen = (myIdentifier) => {
//     console.log(myIdentifier + ' left the screen')
// }

// function SwipeCard(props){

//     const [img_index, setImgIndex] = useState(0);

//     function increaseImgCount(){
//         setImgIndex(img_index + 1);
//     }

//     function decreaseImgCount(){
//         setImgIndex(img_index - 1);
//     }

//     const prop = props.props;
//     return <TinderCard  preventSwipe={['up','down']} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>

//         <div className="card" >

//             <h2>{prop.name}</h2>
//             <h2></h2>
//             {/* <img

//             height="450px" width="500px"
//             src={prop.img[img_index]}
//             // alt="book_img"
//             /> */}
//             <p>Author : {prop.author}</p>
//             <p>{prop.description}</p>
//             <p>{prop.distance} kms away</p>

//         </div>

//         </TinderCard> ;

        

    
// }

