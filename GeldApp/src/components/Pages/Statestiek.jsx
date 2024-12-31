import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import { Chart } from 'primereact/chart';

function Statestiek() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [transactions, setTransaction] = useState([]);
    const [spaardoel, setSpaardoel] = useState(0);
    useEffect(() =>{
        const savedSpaardoel = localStorage.getItem('spaardoel');
        const savedtransacties = localStorage.getItem('transactions');
        if (savedSpaardoel && savedtransacties) {
            const spaardoelLocal = JSON.parse(savedSpaardoel);
            const transactionsLocal = JSON.parse(savedtransacties);
            setSpaardoel(spaardoelLocal);
            setTransaction(transactionsLocal);
        }
    },[])
    const totaleInkomsten = transactions
    .filter((t) => t.type === "INKOMEN")
    .reduce((sum, t) => sum + t.bedrag, 0);
    const totaleUitgaven = transactions
    .filter((t) => t.type === "UITGAVEN")
    .reduce((sum, t) => sum + t.bedrag, 0);
    const inkomsten = parseFloat(totaleInkomsten);
    const uitgaven = parseFloat(totaleUitgaven);
    useEffect(() => {
        const data = {
            labels: ['Inkomen', 'Uitgaven', 'Spaardoel'],
            datasets: [
                {
                    label: 'Overzicht',
                    data: [inkomsten, uitgaven, parseFloat(spaardoel)],
                    backgroundColor: [
                        'rgba(16, 196, 0, 0.56)',
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(0, 4, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgba(16, 196, 0, 0.56)',
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(0, 4, 255, 0.2)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);

    }, []);

    return (
        <Container className='text-center'>
            <h1>Statestieken</h1>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </Container>
    )
}

export default Statestiek
