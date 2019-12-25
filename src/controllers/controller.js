const PptxGenJS = require("pptxgenjs");
const pptx = new PptxGenJS();

exports.generateSamplePPT = (req, res) => {
  console.log('here');
  pptx.setLayout('LAYOUT_WIDE');
  const slide = pptx.addNewSlide();
  const dataChartPieStat = [
		{
			name  : 'Project Status',
			labels: ['Red', 'blue', 'Green', 'yellow'],
			values: [8, 20, 30, 2]
		}
	];
  slide.addChart(
    pptx.charts.PIE, dataChartPieStat,
    {x:0.5, y:0.5, w:4.2, h:3.2, showLegend:true, legendPos:'l', legendFontFace:'Courier New'}
  );
  pptx.save('http', (fileName) => {
    const strFilename = "Node-Demo-ppt-Callback.pptx";
    res.writeHead(200, { 'Content-disposition':'attachment;filename='+strFilename, 'Content-Length':fileName.length });
    res.end(new Buffer(fileName, 'binary'));
  });
}