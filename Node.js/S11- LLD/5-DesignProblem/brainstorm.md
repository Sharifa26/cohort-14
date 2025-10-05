### Problem Statement
- Design a Parking Lot

### Steps to dsign a LLD
#### Stage 1: Requirement Gathering
- Fully Automated: Yes
- Ticket Counter: Yes, at entry gate
- Do we support diferent types of vehicles? Yes, 
    - 4W: Cars, buses
    - 2W: Bikes, bicycle
- Total Capacity? 100
- How many Entry and exit Points located? One
    - One entry and one exit points?
- Suport for multiple floors? Yes
- Any algorithm to pick up parkingspot? No Fancy algorithm
- How the parking fees be calculated?
    - Size
    - VehicleType
    - Weight of the vehicle
    - Duration
    - Monthly Pass
- Support for different payment types? Yes
- Support for different ticket types? Printed Ticket
- Should we support user management? No
- Non Functional requirements
- Should show availability of Spots in Parking Lot
- Support for Emergency? No

-- Scalable
-- modular
-- Low Coupling

#### Stage 2: Identifying the entities of the system
- Vehicle
- ParkingSpot
- ParkingSpotType
- EntryGate
- ExitGate
- Floor
- Payment
- Ticket
- TicketType
- ParkingLot
- VehicleType
- DisplayPanel

#### Identifying the relationship between entities
Vehicle

ParkingSpot
- HAS-A (Weak) relationship with Vehicle

ParkingFloor
- HAS-A (Strong) relationship with ParkingSpot 

EntryPanel
- USES-A relationship with Vehicle
- USES-A parkingFloor for availability




#### Attributes and methods 
Vechicle:
+ type

ParkingSpot
+ size: ENUM[small, medium, large]

ParkingFloor
- parkingSpots: List<ParkingSpot>
------------
+ provideParkingSpot(vehicle: Vehicle): ParkingSpot



#### Draw a class diagram
#### Discuss edge cases / Scale the design / Design extension
