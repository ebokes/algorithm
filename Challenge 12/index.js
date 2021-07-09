function friend(friends) {
    let friendList = [];
    for (person of friends) {
        if (person.length === 4) {
            friendList.push(person);
        }
    }
    return friendList;
}