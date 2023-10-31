// URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Fetch the JSON data and console log it 
d3.json(url).then(function(data){
    console.log(data);
});

//Display the sample metadata, i.e., an individual's demographic information.
function init() {
    selector = d3.select("#selDataset");
    d3.json(url).then(function(data){
        console.log(data);

        let names = data.names; 

        names.forEach((name) => {
        selector.append("option").text(name)

              });
              infoTable(names[0])
              charts(names[0]) 
    }); 
};

//Update all the plots when a new sample is selected. 
function optionChanged(sampleId) {
    infoTable(sampleId)
    charts(sampleId) 
};

//Display each key-value pair from the metadata JSON object somewhere on the page.
function infoTable(sampleId) {
    selector = d3.select("#sample-metadata");
    d3.json(url).then(function(data){
        console.log(data);

        let metadata = data.metadata; 
        let metaResult = metadata.filter(x => x.id == sampleId) [0];
        selector.html("")

        Object.entries(metaResult).forEach(entry => {
        const [key, value] = entry;
        console.log(key, value);
        selector.append("h5").text(`${key}: ${value}`)
        });
    }); 
};

function charts(sampleId) {
    d3.json(url).then(function(data){
        console.log(data);

        let samples = data.samples; 
        
        let sampleResult = samples.filter(x => x.id == sampleId) [0];
        
        let otu_ids = sampleResult.otu_ids
        
        let otu_labels = sampleResult.otu_labels
        
        let sample_values = sampleResult.sample_values

        //Create a horizontal bar chart   
        var barData = [{
            x: sample_values.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).map(x => `OTU ${x}`).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
          }];
          
          let barLayout = {title:"Top 10 OTUs"};
          
          Plotly.newPlot("bar", barData, barLayout);


        //Create a bubble chart that displays each sample.
        var bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                //Use otu_ids for the marker colors.
                color: otu_ids,
                colorscale: 'Earth',
                //Use sample_values for the marker size.
                size: sample_values
            }
        }];
        var bubbleLayout = {title: 'Belly Button Samples'};
          
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    }); 
 }; 
 init()