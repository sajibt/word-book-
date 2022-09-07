import React from "react";

const Itemlist = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        console.log(item.meanings[0].definitions[0].definition);
        console.log(item.word);
        return (
          <div className="wrapper_content" key={index}>
            <div className="title">{item.word}</div>
            <div className="main_text">
              <p>
                <span> Description : </span>
                {item.meanings[0].definitions[0].definition}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Itemlist;
