import React, { Fragment } from "react";
import ReactPlayer from "react-player";


const Dashboard = () => {

    // useEffect(() => {
    //     videoRef.current.addEventListener(
    //         "contextmenu",
    //         function (e) {
    //             e.preventDefault();
    //         },
    //         false
    //     );

    //     return videoRef.current.removeEventListener(
    //         "contextmenu",
    //         function (e) {
    //             e.preventDefault();
    //         },
    //         false
    //     );
    // }, []);

    return (<>

        {/* <div className="main">
            <div className="searchbar2">
                <input type="text" name="" id="" placeholder="Search" />
                <div className="searchbtn">
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                        className="icn srchicn" alt="search-button" />
                </div>
            </div>

            <div className="box-container">

                <div className="box box1">
                    <div className="text">
                        <h2 className="topic-heading">60.5k</h2>
                        <h2 className="topic">Article Views</h2>
                    </div>

                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                        alt="Views" />
                </div>

                <div className="box box2">
                    <div className="text">
                        <h2 className="topic-heading">150</h2>
                        <h2 className="topic">Likes</h2>
                    </div>

                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png" alt="likes" />
                </div>

                <div className="box box3">
                    <div className="text">
                        <h2 className="topic-heading">320</h2>
                        <h2 className="topic">Comments</h2>
                    </div>

                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                        alt="comments" />
                </div>

                <div className="box box4">
                    <div className="text">
                        <h2 className="topic-heading">70</h2>
                        <h2 className="topic">Published</h2>
                    </div>

                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published" />
                </div>
            </div>
        </div> */}






        <Fragment>
            <div className="main">
                <div>
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls={true}
                        url={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
                        config={{ file: { attributes: { controlsList: "download" } } }}
                    />
                </div>
            </div>
        </Fragment>
    </>)
};

export default Dashboard;