import { useState , useEffect } from "react";
import "./game.css";
import games from "../../assets/data/games";
import {AnimatePresence} from "framer-motion";
import GameProduct from "./GameProduct";
import CommonSection from "./common-section/CommonSection";
const Games = () => {
    
    const [category, setCategory] = useState("All");
    const [allProducts, setAllProducts] = useState(games);
    useEffect(() => {
      if (category === "All") {
          setAllProducts(games);
      }
      if (category === "PlayStation") {
        const filteredProducts = games.filter(
            (item) => item.category === "playStation"
        );
  
        setAllProducts(filteredProducts);
    }
      if (category === "xBox") {
          const filteredProducts = games.filter(
              (item) => item.category === "xBox"
          );
  
          setAllProducts(filteredProducts);
      }
  
      if (category === "videoGames") {
          const filteredProducts = games.filter(
              (item) => item.category === "videoGames"
          );
  
          setAllProducts(filteredProducts);
      }
  
      if (category === "nintendoSwitch") {
          const filteredProducts = games.filter(
              (item) => item.category === "nintendoSwitch"
          );
  
          setAllProducts(filteredProducts);
      }
  }, [category]);
    

  return (
    <>
      <CommonSection title="Welcome to the game store." />
      <h2 className="company_Auction game_heading">Electronic games</h2>
      <div className='game_container'>
        <div className="divider">
          <main className="flex">
            <section className="flex left-section">
              <button
              className={category === "All" ? "active" : null}
                onClick={() => {
                  setCategory("All");
                  setAllProducts(games);
                }}
              >
                All Games
              </button>

              <button
                onClick={() => setCategory("PlayStation")}
                className={category === "PlayStation" ? "active" : null}
              >
                Play Station
              </button>

              <button
                onClick={() => setCategory("xBox")}
                className={category === "xBox" ? "active" : null}
              >
                XBox
              </button>
              <button
                onClick={() => setCategory("videoGames")}
                className={category === "videoGames" ? "active" : null}
              >
                video games
              </button>
              <button
                onClick={() => setCategory("nintendoSwitch")}
                className={category === "nintendoSwitch" ? "active" : null}
              >
                Nintendo Switch
              </button>
            </section>
            <section className=" flex right-section">
              <AnimatePresence>
                {allProducts.map((item) => {
                  return (
                    <div key={item.id}>
                      <GameProduct item={item}/>
                    </div>
                  );
                })}
              </AnimatePresence>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Games;
