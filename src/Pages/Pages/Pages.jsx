import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import PageCard from "../../Components/PageCard/PageCard";
import { useStoreState } from "easy-peasy";
import {Link} from "react-router-dom"

const Pages = (props) => {

    const user = useStoreState((state) => state.user);

  const [pages, setPages] = useState([]);

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
            <>
                <div></div>

                <div className="columns">
                {pages.length > 0 &&
                    pages.map((page, index) => {
                    return (
                        <div className="column is-4" key={index}>
                        <PageCard page={page}></PageCard>
                        </div>
                    );
                    })}
                </div>
            </>
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
