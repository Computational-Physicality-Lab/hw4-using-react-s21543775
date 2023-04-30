import React from "react";
import homeImage from "./assets/images/banner.png";

function Home() {
  return (
    <div>
      <div className="home-image">
        <img src={homeImage} alt="home" />
      </div>
      <div className="info-container">
        <div className="info-box">
          <h2>阿克西斯教教義</h2>
          <p>
            阿克西斯教徒努力就能做到，即便失敗不是信徒的錯，不能成功都是世界的錯。從不開心的事情中逃避即可，逃避不是失敗。
            猶豫過久得出的答案，無論如何選擇都會後悔，反正都要後悔，就選擇當下的快樂吧。
            「厄里斯的胸部是墊出來的！」。
          </p>
        </div>
        <div className="info-box">
          <h2>爆裂魔法</h2>
          <p>
            「光に覆われし漆黒よ。夜を纏いし爆炎よ。他はともかく、爆裂魔法のことに関しては私は誰にも負けたくないのです！行きます！我が究極の破壊魔法、エクスプロージョン！」
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
