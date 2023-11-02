import React from "react";
import { useSelector } from "react-redux";
import { TbProgress } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashBoard.css";
import Card from "../../Card/Card";

const DashBoard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dash-container">
        {selectedData.map((ele, index) => {
          return (
            <>
              <div key={index} className="dcard-container">
                <div className="heading flex-sb">
                  <div className="left">
                    {!user ? (
                      <TbProgress />
                    ) : (
                      <>
                        <div
                          className="img-container relative"
                          style={{ width: "15px", height: "15px", display: 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {ele[index]?.title} {ele[index]?.value?.length}
                    </span>
                  </div>
                  <div className="right">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {ele[index]?.value?.map((ele, ind) => {
                    return (
                      <Card id={ele.id} title={ele.title} tag={ele.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
