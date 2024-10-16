/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: oct 2024
 * This program tell the distance in cm to the sonar
*/

let distanceToObject: number = 0
//setup
basic.showIcon(IconNames.Happy)
// find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()  
    distanceToObject = sonar.ping(
        DigitalPin.P1,        
        DigitalPin.P2,   
        PingUnit.Centimeters
        )
//show distance
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)   
})