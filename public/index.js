const data = [
    {
        Title: "Straddle vs. Strangle: An Overview",
        Body: ` Straddles and strangles are both options strategies that allow an investor to benefit from significant moves in a stock's price, whether the stock moves up or down. Both approaches consist of buying an equal number of call and put options with the same expiration date. The difference is that the strangle has two different strike prices, while the straddle has a common strike price.<br>
        
        Straddle<br>
        The straddle trade is one way for a trader to profit on the price movement of an underlying asset. Let's say a company is scheduled to release its latest earnings results in three weeks' time, but you have no idea whether the news will be good or bad. These weeks before the news release would be a good time to enter into a straddle because when the results are released, the stock is likely to move sharply higher or lower.<br>
        
        Let's assume the stock is trading at $15 in the month of April. Suppose a $15 call option for June has a price of $2, while the price of the $15 put option for June is $1. A straddle is achieved by buying both the call and the put for a total of $300: ($2 + $1) x 100 shares per option contract = $300.<br>
        
        The straddle will increase in value if the stock moves higher (because of the long call option) or if the stock goes lower (because of the long put option). Profits will be realized as long as the price of the stock moves by more than $3 per share in either direction.<br>
        
        Strangle<br>
        Another approach to options is the strangle position. While a straddle has no directional bias, a strangle is used when the investor believes the stock has a better chance of moving in a certain direction, but would still like to be protected in the case of a negative move.<br>
        
        For example, let's say you believe a company's results will be positive, meaning you require less downside protection. Instead of buying the put option with the strike price of $15 for $1, maybe you look at buying the $12.50 strike that has a price of $0.25. This trade would cost less than the straddle and also require less of an upward move for you to break even.<br>
        
        Using the lower-strike put option in this strangle will still protect you against extreme downside, while also putting you in a better position to gain from a positive announcement.<br>
        
        <span class = "signature">Addis B</span>`
                                                                                                       
    },
    {
        Title: "",
        Body: ""
    },
    {
        Title: "",
        Body: ""
    },
    {
        Title: "",
        Body: ""
    }
]

$(function() {
    let html = `<div class="row">`;
    for (let i = 0; i < data.length; i++) {
        if (i % 4 == 0)
            html += `</div><div class="row">`;
        html += createCard(i);
    }
    $("#cardContainer").append(html)
});

createCard = (index) => {
    const wordLimit = 30;

    return `<div class="col-md-3 mb-3" onClick="showModal(${index})">
                <div class="card zoom h-100">
                    <div class="card-body"><strong>${data[index].Title}</strong><br/>${data[index].Body.split(" ").splice(0, wordLimit).join(" ")}${data[index].Body.split(" ").length > wordLimit ? "..." : ""}</div>
                </div>
            </div>`;
}

showModal = (index) => {
    $("#modalTitle").html(data[index].Title);
    $("#modalBody").html(data[index].Body);
    $("#myModal").modal('show');
}

submitForm = () => {
    console.log("submit!");
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    }
    
    $.ajax({
        type: "POST",
        url: "/SubmitForm",
        data: data,
        success: function(data) {
            alert("Form Submitted!");
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
        },
        error: function(data) {
        }
    });
}

/*
 Create a function 
changeTitle = (x) => (x.Title = "Addis");

 Call a function 
changeTitle(data[0]);*/