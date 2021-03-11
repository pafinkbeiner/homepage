import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import PageCard from "../../Components/PageCard/PageCard";
import { useStoreState } from "easy-peasy";
import {Link} from "react-router-dom"

const Pages = (props) => {

    const user = useStoreState((state) => state.user);

  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(undefined)

  useEffect(() => {
    let ref = db.collection("pages");

    let unsubscribe = ref.onSnapshot(onCollectionUpdate);

    return () => {
      unsubscribe();
    };
  }, []);

  const onCollectionUpdate = (querySnapshot) => {
    let meta = [];

    querySnapshot.forEach((doc) => {
      meta.push(doc.data());
    });

    setPages(meta)
  };

  return (
    <div className="container">

        {
            user ?
            <div className="columns">

                <div className={selectedPage ? "column is-8" : "column"}>
                  <div className="columns is-multiline">
                  {pages.length > 0 &&
                      pages.map((page, index) => {
                      return (
                        <div className="column is-one-third" key={index}>
                          <PageCard page={page} setSelectedPage={setSelectedPage}></PageCard>
                        </div>
                      );
                      })}

                  </div>

                </div>
                {
                  selectedPage &&

                  <div className="column is-4">
                  
                        <div className="column is-one-third">

                          <button className="button" onClick={() => {setSelectedPage(undefined)}}>Close</button>

                          <iframe src={selectedPage.url} title={selectedPage.title} style={{border: "none", width:"28rem", height:"50rem"}}></iframe>
                        </div>
                    
                  </div>
              }

            </div>
            :
            <div className="columns">
                <div className="column is-3">Please register to see content </div>
                <div className="column is-1"><Link className="button is-primary" to="/Register">Register</Link></div>
            </div>
        }


    </div>
  );
};

export default Pages;
