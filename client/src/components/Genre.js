import React, {useEffect, useState} from "react";

function Genre() {

  const [genres, setGenre] = useState([]);
  const {id, title, description, poem} = genres

  useEffect(() => {
    fetch("/genres")
    .then(response => response.json())
    .then((data) => setGenre(data));
    }, []);
    return (
      <div>
       <div className="author">
         {genres.map((genre) => (
           <div className="author-dets" key={genre.id}>
             <div>
               <h2>{genre.name}</h2>
             </div>
             <div>
            <p>Description:{genre.description}</p>
          </div>
             <div>
             {/* <ul style={{ color: "red" }}>
              {genres.poems.map((poem) => (
              <li key={poem}>{poem}</li>
               ))}
             </ul> */}
               {/* <h3>Poem:{poem.title}</h3> */}
             </div>
           </div>
         ))}
       </div>
      </div>);
   }

export default Genre;

