function Score(props)
{
    console.log(props.score);
    return(
        <div >
           
            your score:{props.score}
            <br/>
            total score:{props.totalscore}
        </div>
    )
}
export default Score;