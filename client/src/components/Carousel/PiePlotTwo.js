import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { Button, Carousel, Row, Col } from "reactstrap";
// import './App.css';

class PiePlotTwo extends Component {

    constructor(props) {
        super();
        // console.log(this.props);

    }


    state = {
        data: [],
        plotObjectsArray: [],
        showingPlot: [],
        plotLayout: [],
        recipeIndex: 0,
        nutrientIndex: 0

    }

    componentDidMount() {
        this.createPlot()
    }


    createPlot = () => {
        // this.setState({ data: this.props });
        // console.log(this.state.data);

        // create a copy of the data object
        const dataCopy = this.props.data;
        // for each recipe 'hits', extract the 'digest' property within the 'recipe' property
        // as well as the yield by recipe
        let plotObjectsArray = [];
        let recipeDigestArray = [];
        let recipeYieldArray = [];

        // dataCopy.forEach(result => {
        // console.log(result.recipe.digest);
        let recipeDigest = this.props.digestData;
        let recipeYield = this.props.yieldData;

        // create object that will contain the 'data' property for each distinct plot (macros, fats, minerals, vitamins)
        let plotObjects = [
            {
                data: {
                    values: [],
                    labels: [],
                    name: 'Macronutrients',
                    hoverinfo: 'label+percent+name',
                    hole: .6,
                    type: 'pie'
                },
                layout: {
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {
                                size: 14
                            },
                            showarrow: false,
                            text: 'Macros',
                            x: 0.3,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 350,
                    width: 350,
                    margin: {
                        l: 25,
                        r: 25,
                        t: 25,
                        b: 25,
                    }
                }

            },
            {
                data: {
                    values: [],
                    labels: [],
                    text: 'Fats',
                    textposition: 'inside',
                    name: 'Lipids',
                    hoverinfo: 'label+percent+name',
                    hole: .6,
                    type: 'pie'
                },
                layout: {

                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {
                                size: 14
                            },
                            showarrow: false,
                            text: 'Fats',
                            x: 0.5,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 350,
                    width: 350,
                    margin: {
                        l: 25,
                        r: 25,
                        t: 25,
                        b: 25,
                    }
                }
            },
            {
                data: {
                    values: [],
                    labels: [],
                    name: 'Minerals',
                    hoverinfo: 'label+percent+name',
                    hole: .6,
                    type: 'pie'
                },
                layout: {

                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {
                                size: 14
                            },
                            showarrow: false,
                            text: 'Minerals',
                            x: 0.3,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 350,
                    width: 350,
                    margin: {
                        l: 25,
                        r: 25,
                        t: 25,
                        b: 25,
                    }
                }
            },
            {
                data: {
                    values: [],
                    labels: [],
                    name: 'Vitamins',
                    hoverinfo: 'label+percent+name',
                    hole: .6,
                    type: 'pie'
                },
                layout: {

                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {
                                size: 14
                            },
                            showarrow: false,
                            text: 'Vitamins',
                            x: 0.27,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 350,
                    width: 350,
                    margin: {
                        l: 25,
                        r: 25,
                        t: 25,
                        b: 25,
                    }
                }

            }]
        // console.log(plotObjects);
        plotObjectsArray.push(plotObjects);
        recipeDigestArray.push(recipeDigest);
        recipeYieldArray.push(recipeYield);
        // })

        // console.log(plotObjectsArray);
        // console.log(recipeDigestArray);
        // console.log(recipeYieldArray);
        recipeDigestArray.forEach((recipeDigest, index) => {
            recipeDigest.forEach((nutrient, i) => {
                // push nutrient servings for each nutrient
                if (nutrient.label === "Fat" || nutrient.label === "Carbs" || nutrient.label === "Protein") {
                    plotObjectsArray[index][0].data.values.push(nutrient.total / recipeYieldArray[index]);
                    plotObjectsArray[index][0].data.labels.push(nutrient.label);

                    if (nutrient.label === "Fat") {
                        nutrient.sub.forEach(fat => {

                            plotObjectsArray[index][1].data.values.push(fat.total / recipeYieldArray[index]);
                            plotObjectsArray[index][1].data.labels.push(fat.label);
                        })

                    }
                }

                else if (i > 3 & i < 11) {
                    // console.log(nutrient, i);
                    // console.log(arrayDigest.slice(1, 5));
                    plotObjectsArray[index][2].data.values.push((nutrient.total) / recipeYieldArray[index]);
                    plotObjectsArray[index][2].data.labels.push(nutrient.label);

                }
                else if (i > 10 & i < 24) {
                    // console.log(nutrient, i);
                    // console.log(arrayDigest.slice(1, 5));
                    plotObjectsArray[index][3].data.values.push(nutrient.total / recipeYieldArray[index]);
                    plotObjectsArray[index][3].data.labels.push(nutrient.label);

                }

            })
        })
        // console.log(plotObjectsArray);

        this.setState(
            {
                plotObjectsArray: plotObjectsArray,
                showingPlot: plotObjectsArray[0][0].data,
                plotLayout: plotObjectsArray[0][0].layout
            });

        // console.log(this.state.plotObjectsArray);

    }

    nextRecipe = (event) => {
        // console.log(event.target.value);
        // console.log(this.state.recipeIndex);
        // console.log(this.state.plotObjectsArray);
        let plotObjectsArrayCopy = this.state.plotObjectsArray;
        let recipeIndexCopy = this.state.recipeIndex;
        let nutrientIndex = this.state.nutrientIndex;
        recipeIndexCopy++;
        this.setState({
            showingPlot: plotObjectsArrayCopy[recipeIndexCopy][nutrientIndex].data,
            recipeIndex: recipeIndexCopy
        });
    }

    switchPlot = (event) => {
        // console.log(event.target.value);
        let plotObjectsArrayCopy = this.state.plotObjectsArray;
        let recipeIndexCopy = this.state.recipeIndex;
        let nutrientIndex = event.target.value;
        this.setState({
            showingPlot: plotObjectsArrayCopy[recipeIndexCopy][nutrientIndex].data,
            nutrientIndex: nutrientIndex,
            plotLayout: plotObjectsArrayCopy[recipeIndexCopy][nutrientIndex].layout
        })
    }




    // console.log(this.state.plotData)

    render() {
        return (
            <div>
                {/* <Row> */}
                    {/* <Col xs={12}> */}
                        <div className="graphButtons">
                            <Button onClick={this.switchPlot} value={0}>Macros</Button>
                            <Button onClick={this.switchPlot} value={1}>Lipids</Button>
                            <Button onClick={this.switchPlot} value={2}>Minerals</Button>
                            <Button onClick={this.switchPlot} value={3}>Vitamins</Button>
                        </div>
                    {/* </Col> */}
                {/* </Row> */}
                {/* <Row> */}
                    <Plot
                        data={[this.state.showingPlot]}
                        layout={this.state.plotLayout} 
                    />
                {/* </Row> */}
            </div>
        );
    }
}

export default PiePlotTwo;
