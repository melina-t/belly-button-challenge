# belly-button-challenge

# Instructions

Complete the following steps:
1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.
2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    - Use `sample_values` as the values for the bar chart.
    - Use `otu_ids` as the labels for the bar chart.
    - Use `otu_labels` as the hovertext for the chart.

![image](https://github.com/melina-t/belly-button-challenge/assets/132321994/29eb0b8b-21b8-45eb-8309-a4d0e8cfec6f)

3. Create a bubble chart that displays each sample.
   - Use `otu_ids` for the x values.
   - Use `sample_values` for the y values.
   - Use `sample_values` for the marker size.
   - Use `otu_ids` for the marker colors.
   - Use `otu_labels` for the text values.
  
![image](https://github.com/melina-t/belly-button-challenge/assets/132321994/2bd485a5-48e1-41c0-be52-88c4c1404ebd)

4. Display the sample metadata, i.e., an individual's demographic information.
5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://github.com/melina-t/belly-button-challenge/assets/132321994/07b3f6f2-ee13-4dff-8945-1c23222548f0)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![image](https://github.com/melina-t/belly-button-challenge/assets/132321994/11e404f1-2986-4fb8-8059-838ace3b10d9)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

## Advanced Challenge Assignment

- Adapt the Gauge Chart from [https://plot.ly/javascript/gauge-charts/](https://plot.ly/javascript/gauge-charts/) to plot the weekly washing frequency of the individual.
- You will need to modify the example gauge code to account for values ranging from 0 through 9.
- Update the chart whenever a new sample is selected.

![image](https://github.com/melina-t/belly-button-challenge/assets/132321994/04f9d0cc-296d-4635-9f57-e43aca2f17ea)

> [!HINT]
> - Use `console.log` inside of your JavaScript code to see what your data looks like at each step.
> - Refer to the[ Plotly.js documentation](https://plotly.com/javascript/) when building the plots.

