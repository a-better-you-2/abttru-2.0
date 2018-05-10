import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import recipeData from './PlotData.json';
// import './App.css';

class PiePlotTwo extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);

    }

    state = {
        // data: this.props.faveRecipe,
        data: [],
        // data: this.props.data,
        dupe_data: this.props.dupe,
        plotObjectsArr: [],
        showingPlot: [],
        plotLayout: [],
        recipeIndex: 0,
        nutrientIndex: 0

    }

    componentDidMount() {
        this.createPlot()
    }

    createPlot = () => {
        this.setState({data: this.props});
        console.log(this.state.data);
        const dataCopy = this.props.data;

        let recipeDigest = this.props.digestData;
        let recipeYield = this.props.yieldData;
        
        // // as well as the yield by recipe
        // let recipeDigest = this.state.data.map((data) =>
        //    data.recipe.digest
        // );
        console.log(recipeDigest);
        // let recipeYield = this.state.data.map((data) =>
        //     data.recipe.yield
        // );
        console.log(recipeYield);
        let plotObjects = this.state.data.map((recipe) =>
            [
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
                    title: 'Nutrient Breakdown',
                    titlefont:
                        {size: 30},
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {size: 14},
                            showarrow: false,
                            text: 'Macros',
                            x: 0.3,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 430,
                    width: 350
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
                    title: 'Nutrient Breakdown',
                    titlefont:
                        {
                            size: 30
                        },
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {size: 14},
                            showarrow: false,
                            text: 'Fats',
                            x: 0.5,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 430,
                    width: 350
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
                    title: 'Nutrient Breakdown',
                    titlefont:
                        {size: 30},
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {size: 14},
                            showarrow: false,
                            text: 'Minerals',
                            x: 0.3,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 430,
                    width: 350
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
                    title: 'Nutrient Breakdown',
                    titlefont:
                        {size: 30},
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent',
                    annotations: [
                        {
                            font: {size: 14},
                            showarrow: false,
                            text: 'Vitamins',
                            x: 0.27,
                            y: 0.5
                        }
                    ],
                    showlegend: false,
                    height: 430,
                    width: 350
                }
              }
            ]
        );
        console.log(plotObjects);
        // console.log(recipeDigestArray);
        // console.log(recipeYieldArray);
        recipeDigest.forEach((recipe, index) => {
            recipe.forEach((nutrient, i) => {
                // push nutrient servings for each nutrient
                if (nutrient.label === "Fat" || nutrient.label === "Carbs" || nutrient.label === "Protein") {
                    plotObjects[index][0].data.values.push(nutrient.total / recipeYield[index]);
                    plotObjects[index][0].data.labels.push(nutrient.label);

                    if (nutrient.label === "Fat") {
                        nutrient.sub.forEach(fat => {
                            plotObjects[index][1].data.values.push(fat.total / recipeYield[index]);
                            plotObjects[index][1].data.labels.push(fat.label);
                        })
                    }
                } else if (i > 3 & i < 11) {
                    // console.log(nutrient, i);
                    // console.log(.slice(1, 5));
                    plotObjects[index][2].data.values.push((nutrient.total) / recipeYield[index]);
                    plotObjects[index][2].data.labels.push(nutrient.label);
                } else if (i > 10 & i < 24) {
                    // console.log(nutrient, i);
                    // console.log(.slice(1, 5));
                    plotObjects[index][3].data.values.push(nutrient.total / recipeYield[index]);
                    plotObjects[index][3].data.labels.push(nutrient.label);
                }
            })
        })

        console.log(plotObjects);
        let obj = plotObjects;
        this.setState((state) => ({plotObjectsArr: plotObjects}));
        this.setState(
            {plotObjectsArr: plotObjects},
            {showingPlot: plotObjects[0][0].data},
            {plotLayout: plotObjects[0][0].layout}
        );
        console.log(this.state.plotObjectsArr);
        console.log(this.state.dupe_data);
    }

    nextRecipe = (event) => {
        console.log(event.target.value);
        this.setState(
            {recipeIndex: this.state.recipeIndex + 1},
            {showingPlot: this.state.plotObjects[this.state.recipeIndex][this.state.nutrientIndex].data}
        );
        console.log(this.state.recipeIndex);
        console.log(this.state.showingPlot);
    }

    switchPlot = (event) => {
        console.log(event.target.value);
        this.setState({showingPlot: this.state.plotObjects[this.state.recipeIndex][this.state.nutrientIndex].data},
            {nutrientIndex: this.state.nutrientIndex},
            {plotLayout: this.state.plotObjects[this.state.recipeIndex][this.state.nutrientIndex].layout}
        )
    }
    // console.log(this.state.plotData)

    render() {

        return (
            <div>
                <header>
                  <h1>Check out these pretty plots!</h1>
                </header>

                {/* <button onClick={this.nextRecipe.bind(this)} value={0}>Next Recipe</button> */}
                {/* <button onClick={this.createPlot.bind(this)}>Search for a recipe!</button> */}
                <button onClick={this.switchPlot.bind(this)} value={0}>Macros</button>
                <button onClick={this.switchPlot.bind(this)} value={1}>Lipids</button>
                <button onClick={this.switchPlot.bind(this)} value={2}>Minerals</button>
                <button onClick={this.switchPlot.bind(this)} value={3}>Vitamins</button>

                <Plot
                    data={[this.state.showingPlot]}
                    layout={this.state.plotLayout} 
                />
            </div>
        );
    }
}

export default PiePlotTwo;