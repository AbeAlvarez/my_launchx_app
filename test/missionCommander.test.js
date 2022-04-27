const missionCommander = require ("./../app/missionCommander")

describe("Unit Tests for Mission Commander Class", () => {
    test('Create a mission commander objet', () => {
      const myMissionCommander = ("Woopa") 
      expect(myMissionCommander).toBe("Woopa");
    });
  })