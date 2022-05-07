import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { IProduct, IFormatManufacturerData } from '../../lib/interfaces';

interface IBarChartProps {
  data: IProduct[]
}

interface IPieChartProps {
  data: IFormatManufacturerData[];
}

export function BarChartComponent(props: IBarChartProps): JSX.Element {
  const { data } = props;

  return (
    <ResponsiveContainer width="80%" height="50%">
      <BarChart
        width={ 500 }
        height={ 300 }
        data={ data }
        margin={ {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        } }
        barSize={ 20 }>
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="price" fill="#8884d8" background={ { fill: '#eee' } } />
      </BarChart>
    </ResponsiveContainer>
  )
}
interface IChartCutomizedLabel {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}
export function PieChartComponent(props: IPieChartProps): JSX.Element {
  const { data } = props;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: IChartCutomizedLabel) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={ x } y={ y } fill="black" textAnchor={ x > cx ? 'start' : 'end' } dominantBaseline="central">
        { `${data[index].totalProducts}` }
      </text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="100%" height="50%">
        <PieChart width={ 400 } height={ 400 }>
          <Pie
            data={ data }
            cx="50%"
            cy="50%"
            labelLine={ false }
            label={ renderCustomizedLabel }
            outerRadius={ 120 }
            fill="#8884d8"
            dataKey="totalProducts"
          >
            { data.map((entry, index) => (
              <Cell key={ `cell-${index}` } fill={ COLORS[index % COLORS.length] } />
            )) }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{display: 'flex', gap:'20px', justifyContent: 'center'}}>
        <div style={{ display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <div style={ { width: '20px', height: '20px', backgroundColor: '#0088FE' } }></div>
          <p style={{ fontSize: '10px'}}>Hemofarm</p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <div style={ { width: '20px', height: '20px', backgroundColor: '#00C49F' } }></div>
          <p style={{ fontSize: '10px'}}>Pfizer</p>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <div style={ { width: '20px', height: '20px', backgroundColor: '#FFBB28' } }></div>
          <p style={{ fontSize: '10px'}}>Bayer</p>
        </div>
      </div>
    </>
  )
}