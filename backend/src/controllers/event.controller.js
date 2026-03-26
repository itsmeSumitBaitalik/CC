import Event from "../model/Events.js";

export const createEvent = async (req, res) => {
  const {
    title,
    description,
    date,
    location,
    registrationLink,
    campusName,
    eventType,
  } = req.body;

  try {
    if (
      !title ||
      !description ||
      !date ||
      !location ||
      !registrationLink ||
      !campusName ||
      !eventType
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const event = await Event.create({
      title,
      description,
      date,
      location,
      registrationLink,
      campusName,
      eventType,
      createdBy: req.user.id,
    });

    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateEvent = async (req, res) => {
  const {
    title,
    description,
    date,
    location,
    registrationLink,
    campusName,
    eventType,
  } = req.body;

  try{
    const ExistingEvent = await Event.findById(req.params.id);

    if(!ExistingEvent){
      return res.status(404).json({message:"Event not found"});
    }
    if(ExistingEvent.createdBy.toString() !== req.user.id.toString()){
      return res.status(403).json({message:"Unauthorized"});
    }
    
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        date,
        location,
        registrationLink,
        campusName,
        eventType,
      },
      { new: true }
    );

    res.status(200).json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Server error" });
  }

}

export const deleteEvent = async (req, res) => {
  try{
    const ExistingEvent = await Event.findById(req.params.id);
  
    if(!ExistingEvent){
      return res.status(404).json({message:"Event not found"});
    }
    if(ExistingEvent.createdBy.toString() !== req.user.id.toString()){
      return res.status(403).json({message:"Unauthorized"});
    }
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted successfully" });
  }catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Server error" });
  }
}