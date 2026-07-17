import RightSection from "./RightSection/RightSection";
import LeftSection from "./LeftSection/LeftSection";

import "./CSS/DisplayPage.css";

export default function DisplayPage() {
    return (
        <div className="display-page container-fluid">

            <div className="row">

                <div className="col-lg-7 col-md-12">
                    <LeftSection />
                </div>

                <div className="col-lg-5 col-md-12">
                    <RightSection />
                </div>

            </div>

        </div>
    );
}