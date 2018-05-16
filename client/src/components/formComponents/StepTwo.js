import React from 'react';

const StepTwo = (props) => {
    const pathName = props.pathName;
    console.log(pathName);
    if (pathName === '/edit/:id') {
        return <div>
            <br />
            <br />
            <form>

                <h3> Weight:</h3>
                <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text"
                    name="weight"
                    placeholder="Weight (LBS)"
                    value={props.weight}
                    onChange={props.onChange} />

                <br /><br />

                <h3>Waist Measurement:</h3>
                <select className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    name="waist"
                    placeholder="Waist Measurement"
                    value={props.waist}
                    onChange={props.onChange}
                >
                    <option value="24">24"</option>
                    <option value="25">25"</option>
                    <option value="26">26"</option>
                    <option value="27">27"</option>
                    <option value="28">28"</option>
                    <option value="29">29"</option>
                    <option value="30">30"</option>
                    <option value="31">31"</option>
                    <option value="32">32"</option>
                    <option value="33">33"</option>
                    <option value="34">34"</option>
                    <option value="35">35"</option>
                    <option value="36">36"</option>
                    <option value="37">37"</option>
                    <option value="38">38"</option>
                    <option value="39">39"</option>
                    <option value="40">40"</option>
                    <option value="41">41"</option>
                    <option value="42">42"</option>
                    <option value="43">43"</option>
                    <option value="44">44"</option>
                    <option value="45">45"</option>
                    <option value="46">46"</option>
                    <option value="47">47"</option>
                    <option value="48">48"</option>
                    <option value="49">49"</option>
                    <option value="50">50"</option>
                    <option value="51">50" +</option>
                </select>

                <br /><br />
            </form>
        </div>
    }
    else {
        return <div>
            <br />
            <br />
            <form>

                <h3>Date of Birth:</h3>
                <input className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" type="date"
                    name="dob"
                    value={props.dob}
                    onChange={props.onChange}
                />

                <br /><br />

                <h3>Sex:</h3>
                <select className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12" value={props.sex} name="sex" onChange={props.onChange}>
                    <option value="" disabled></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <br /><br />

                <h3> Height:</h3>

                <select
                    className="input-wizard col-xs-6 col-sm-6 col-md-6 col-lg-6"
                    id="height"
                    name="heightFoot"
                    placeholder="Height"
                    value={props.heightFoot}
                    onChange={props.onChange}
                >
                    <option value="3">3'</option>
                    <option value="4">4'</option>
                    <option value="5">5'</option>
                    <option value="6">6'</option>
                    <option value="7">7'</option>
                </select>
                <select
                    className="input-wizard height col-xs-6 col-sm-6 col-md-6 col-lg-6"
                    id="height"
                    name="heightInch"
                    placeholder="Height"
                    value={props.heightInch}
                    onChange={props.onChange}
                >
                    <option value="0">0"</option>
                    <option value="1">1"</option>
                    <option value="2">2"</option>
                    <option value="3">3"</option>
                    <option value="4">4"</option>
                    <option value="5">5"</option>
                    <option value="6">6"</option>
                    <option value="7">7"</option>
                    <option value="8">8"</option>
                    <option value="9">9"</option>
                    <option value="10">10"</option>
                    <option value="11">11"</option>
                </select>

                <br /><br />

                <h3>Weight:</h3>
                <input
                    className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    type="text"
                    name="weight"
                    placeholder="Weight (LBS)"
                    value={props.weight}
                    onChange={props.onChange} />


                <br /><br />


                <h3> Waist Measurement:</h3>
                <select
                    className="input-wizard col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    name="waist"
                    placeholder="Waist Measurement"
                    value={props.waist}
                    onChange={props.onChange}
                >
                    <option value="24">24"</option>
                    <option value="25">25"</option>
                    <option value="26">26"</option>
                    <option value="27">27"</option>
                    <option value="28">28"</option>
                    <option value="29">29"</option>
                    <option value="30">30"</option>
                    <option value="31">31"</option>
                    <option value="32">32"</option>
                    <option value="33">33"</option>
                    <option value="34">34"</option>
                    <option value="35">35"</option>
                    <option value="36">36"</option>
                    <option value="37">37"</option>
                    <option value="38">38"</option>
                    <option value="39">39"</option>
                    <option value="40">40"</option>
                    <option value="41">41"</option>
                    <option value="42">42"</option>
                    <option value="43">43"</option>
                    <option value="44">44"</option>
                    <option value="45">45"</option>
                    <option value="46">46"</option>
                    <option value="47">47"</option>
                    <option value="48">48"</option>
                    <option value="49">49"</option>
                    <option value="50">50"</option>
                    <option value="51">50" +</option>
                </select>

                <br /><br />
            </form>
        </div>
    }

}
export default StepTwo;