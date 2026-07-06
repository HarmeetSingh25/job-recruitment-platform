const ChartTooltip = ({ active, payload }) => {

    if(!active || !payload?.length) return null;

    return (

        <div className="rounded-lg border bg-white p-3 shadow-lg">

            <p className="font-semibold">
                {payload[0].name}
            </p>

            <p className="text-blue-600">
                Jobs : {payload[0].value}
            </p>

        </div>

    )

}

export default ChartTooltip;