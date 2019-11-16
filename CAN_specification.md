#CAN specification document
This document details how every important CAN message should be represented as a JSON object.
This ensures that people working on the front end and on the back end are on the same page.

Here is an example:

###Battery Temperature: 0x627
```
var data = 
{
    "msg-id": <Integer from 0x000 to 0x7FF, representing a unique CAN ID>,
    "msg-source": <String, representing the source of the message("bms", "motor-controller")>,
    "timestamp": <Integer, representing the UNIX time the message was sent.>,
    "data": 
        {
            "ave-batt-temp": <Integer, in degrees Celsius>,
            "max-batt-temp": <Integer, in degrees Celsius>,
            "min-batt-temp": <Integer, in degrees Celsius>
        }
}

```