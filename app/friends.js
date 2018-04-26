// Friends (DATA)
//==============================================================
var friendz = [
    {
        name: "cody",
        photo: "silly.jpg",
        scores: [1, 2, 4, 5, 5, 5, 5, 4, 3, 2]
    },
    {
        name: "Sam",
        photo: "silly.jpg",
        scores: [1, 4, 4, 5, 5, 3, 5, 4, 3, 2]
    },
    {
        name: "Tom",
        photo: "silly.jpg",
        scores: [2, 3, 1, 1, 1, 3, 5, 4, 3, 2]
    }
];

exports.match = function(newFriend) {
    console.log(newFriend);
    //Put logic for friend matching
    // Make for loop through new friend sent over and compare to friendz array values scores

    return friendz[0]  // Return is the last line of the logic
    
};

exports.friendz = friendz;
