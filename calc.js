var FKeyPad = document.Keypad;
var Accumulate = 0;
var FlagNewNum = false;
var PendingOp = "";

function NumPressed (Num) {    
    if (FlagNewNum) {
        FKeyPad.Display.value  = Num;
        FlagNewNum = false;
    } else {
        if (FKeyPad.Display.value == "0")
            FKeyPad.Display.value = Num;
        else
            FKeyPad.Display.value += Num;
    }
}

function Operation (Op) {
    var Readout = FKeyPad.Display.value;
    if (FlagNewNum && PendingOp != "=");
    else
    {
        FlagNewNum = true;
        if ( '+' == PendingOp )
            Accumulate += parseFloat(Readout);
        else if ( '-' == PendingOp )
            Accumulate -= parseFloat(Readout);
        else if ( '/' == PendingOp )
            Accumulate /= parseFloat(Readout);
        else if ( '*' == PendingOp )
            Accumulate *= parseFloat(Readout);
        else
            Accumulate = parseFloat(Readout);
        FKeyPad.Display.value = Accumulate;
        PendingOp = Op;
    }
}

function Decimal () {
    var curDisplay = FKeyPad.Display.value;
    if (FlagNewNum) {
        curDisplay = "0.";
        FlagNewNum = false;
    } else {
        if (curDisplay.indexOf(".") == -1)
            curDisplay += ".";
    }
    FKeyPad.Display.value = curDisplay;
}

function ClearEntry () {
    FKeyPad.Display.value = "0";
    FlagNewNum = true;
}

function Clear () {
    Accumulate = 0;
    PendingOp = "";
    ClearEntry();
}

function Neg () {
    FKeyPad.Display.value = parseFloat(FKeyPad.Display.value) * -1;
}
