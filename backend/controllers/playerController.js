const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Create a new player
router.post('/players', async (req, res) => {
  try {
      // Check if the name field is present
      const { name } = req.body;
      if (!name) {
          return res.status(400).send({ message: 'Name is required.' });
      }

      // Set default values for stats
      const playerData = {
          ...req.body,
          stats: {
              appearances: {
                  games: req.body.stats?.appearances?.games || "N/A",
                  minutes: req.body.stats?.appearances?.minutes || "N/A",
                  starts: req.body.stats?.appearances?.starts || "N/A",
                  sub_off: req.body.stats?.appearances?.sub_off || "N/A",
                  sub_on: req.body.stats?.appearances?.sub_on || "N/A",
              },
              defense: {
                  clearances: req.body.stats?.defense?.clearances || "N/A",
                  interceptions: req.body.stats?.defense?.interceptions || "N/A",
                  blockedShots: req.body.stats?.defense?.blockedShots || "N/A",
                  blockedShots_per: req.body.stats?.defense?.blockedShots_per || "N/A",
                  cleanSheets: req.body.stats?.defense?.cleanSheets || "N/A",
                  goalsConceded: req.body.stats?.defense?.goalsConceded || "N/A",
                  goalsConceded_per: req.body.stats?.defense?.goalsConceded_per || "N/A",
                  goalsConcededInsideBox: req.body.stats?.defense?.goalsConcededInsideBox || "N/A",
                  goalsConcededInsideBox_per: req.body.stats?.defense?.goalsConcededInsideBox_per || "N/A",
                  goalsConcededOutsideBox: req.body.stats?.defense?.goalsConcededOutsideBox || "N/A",
                  goalsConcededOutsideBox_per: req.body.stats?.defense?.goalsConcededOutsideBox_per || "N/A",
                  ownGoals: req.body.stats?.defense?.ownGoals || "N/A",
                  ownGoals_per: req.body.stats?.defense?.ownGoals_per || "N/A",
                  penaltyGoalsConceded: req.body.stats?.defense?.penaltyGoalsConceded || "N/A",
                  penaltyGoalsConceded_per: req.body.stats?.defense?.penaltyGoalsConceded_per || "N/A",
                  shotsOnTargetFaced: req.body.stats?.defense?.shotsOnTargetFaced || "N/A",
                  shotsOnTargetFacedInsideBox: req.body.stats?.defense?.shotsOnTargetFacedInsideBox || "N/A",
                  shotsOnTargetFacedInsideBox_per: req.body.stats?.defense?.shotsOnTargetFacedInsideBox_per || "N/A",
                  shotsOnTargetFacedOutsideBox: req.body.stats?.defense?.shotsOnTargetFacedOutsideBox || "N/A",
                  shotsOnTargetFacedOutsideBox_per: req.body.stats?.defense?.shotsOnTargetFacedOutsideBox_per || "N/A",
                  clearances_per_90: req.body.stats?.defense?.clearances_per_90 || "N/A",
                  interceptions_per_90: req.body.stats?.defense?.interceptions_per_90 || "N/A",
                  blockedShots_per_90: req.body.stats?.defense?.blockedShots_per_90 || "N/A",
                  cleanSheets_per_90: req.body.stats?.defense?.cleanSheets_per_90 || "N/A",
                  goalsConceded_per_90: req.body.stats?.defense?.goalsConceded_per_90 || "N/A",
                  goalsConcededInsideBox_per_90: req.body.stats?.defense?.goalsConcededInsideBox_per_90 || "N/A",
                  goalsConcededOutsideBox_per_90: req.body.stats?.defense?.goalsConcededOutsideBox_per_90 || "N/A",
                  ownGoals_per_90: req.body.stats?.defense?.ownGoals_per_90 || "N/A",
                  penaltyGoalsConceded_per_90: req.body.stats?.defense?.penaltyGoalsConceded_per_90 || "N/A",
                  shotsOnTargetFaced_per_90: req.body.stats?.defense?.shotsOnTargetFaced_per_90 || "N/A",
                  shotsOnTargetFacedInsideBox_per_90: req.body.stats?.defense?.shotsOnTargetFacedInsideBox_per_90 || "N/A",
                  shotsOnTargetFacedOutsideBox_per_90: req.body.stats?.defense?.shotsOnTargetFacedOutsideBox_per_90 || "N/A",
              },
              discipline: {
                  totalCards: req.body.stats?.discipline?.totalCards || "N/A",
                  yellowCards: req.body.stats?.discipline?.yellowCards || "N/A",
                  redCards: req.body.stats?.discipline?.redCards || "N/A",
                  totalCards_per_90: req.body.stats?.discipline?.totalCards_per_90 || "N/A",
                  yellowCards_per_90: req.body.stats?.discipline?.yellowCards_per_90 || "N/A",
                  redCards_per_90: req.body.stats?.discipline?.redCards_per_90 || "N/A",
              },
              
              // Duels Stats
              duels: {
                takeOnsOverrun: req.body.stats?.duels?.takeOnsOverrun || "N/A",
                duelsContested: req.body.stats?.duels?.duelsContested || "N/A",
                tacklesMade: req.body.stats?.duels?.tacklesMade || "N/A",
                foulsFromTackleAttempts: req.body.stats?.duels?.foulsFromTackleAttempts || "N/A",
                lastManTacklesMade: req.body.stats?.duels?.lastManTacklesMade || "N/A",
                takeOnsCompleted: req.body.stats?.duels?.takeOnsCompleted || "N/A",
                takeOnSuccessPercentage: req.body.stats?.duels?.takeOnSuccessPercentage || "N/A",
                foulsWon: req.body.stats?.duels?.foulsWon || "N/A",
                fouls: req.body.stats?.duels?.fouls || "N/A",
                penaltiesWon: req.body.stats?.duels?.penaltiesWon || "N/A",
                aerialDuelsContested: req.body.stats?.duels?.aerialDuelsContested || "N/A",
                aerialDuelsWon: req.body.stats?.duels?.aerialDuelsWon || "N/A",
                aerialDuelSuccessPercentage: req.body.stats?.duels?.aerialDuelSuccessPercentage || "N/A",
                groundDuelsContested: req.body.stats?.duels?.groundDuelsContested || "N/A",
                groundDuelsWon: req.body.stats?.duels?.groundDuelsWon || "N/A",
                duelsWon: req.body.stats?.duels?.duelsWon || "N/A",
                duelsWon_per: req.body.stats?.duels?.duelsWon_per || "N/A",
                groundDuelSuccessPercentage: req.body.stats?.duels?.groundDuelSuccessPercentage || "N/A",
                takeOnsOverrun_per_90: req.body.stats?.duels?.takeOnsOverrun_per_90 || "N/A",
                duelsContested_per_90: req.body.stats?.duels?.duelsContested_per_90 || "N/A",
                tacklesMade_per_90: req.body.stats?.duels?.tacklesMade_per_90 || "N/A",
                foulsFromTackleAttempts_per_90: req.body.stats?.duels?.foulsFromTackleAttempts_per_90 || "N/A",
                lastManTacklesMade_per_90: req.body.stats?.duels?.lastManTacklesMade_per_90 || "N/A",
                takeOnsCompleted_per_90: req.body.stats?.duels?.takeOnsCompleted_per_90 || "N/A",
                takeOnSuccessPercentage_per_90: req.body.stats?.duels?.takeOnSuccessPercentage_per_90 || "N/A",
                foulsWon_per_90: req.body.stats?.duels?.foulsWon_per_90 || "N/A",
                fouls_per_90: req.body.stats?.duels?.fouls_per_90 || "N/A",
                penaltiesWon_per_90: req.body.stats?.duels?.penaltiesWon_per_90 || "N/A",
                aerialDuelsContested_per_90: req.body.stats?.duels?.aerialDuelsContested_per_90 || "N/A",
                aerialDuelsWon_per_90: req.body.stats?.duels?.aerialDuelsWon_per_90 || "N/A",
                aerialDuelSuccessPercentage_per_90: req.body.stats?.duels?.aerialDuelSuccessPercentage_per_90 || "N/A",
                groundDuelsContested_per_90: req.body.stats?.duels?.groundDuelsContested_per_90 || "N/A",
                groundDuelsWon_per_90: req.body.stats?.duels?.groundDuelsWon_per_90 || "N/A",
                duelsWon_per_90: req.body.stats?.duels?.duelsWon_per_90 || "N/A",
                groundDuelSuccessPercentage_per_90: req.body.stats?.duels?.groundDuelSuccessPercentage_per_90 || "N/A",
              },

              // Goalkeeping Stats
              goalkeeping: {
                shotsfaced: req.body.stats?.goalkeeping?.shotsfaced || "N/A",
                savesmade: req.body.stats?.goalkeeping?.savesmade || "N/A",
                savesmade_in_box: req.body.stats?.goalkeeping?.savesmade_in_box || "N/A",
                savesmade_out_box: req.body.stats?.goalkeeping?.savesmade_out_box || "N/A",
                penalties_faced: req.body.stats?.goalkeeping?.penalties_faced || "N/A",
                penalties_saved: req.body.stats?.goalkeeping?.penalties_saved || "N/A",
                shotsfaced_per_90: req.body.stats?.goalkeeping?.shotsfaced_per_90 || "N/A",
                savesmade_per_90: req.body.stats?.goalkeeping?.savesmade_per_90 || "N/A",
                savesmade_in_box_per_90: req.body.stats?.goalkeeping?.savesmade_in_box_per_90 || "N/A",
                savesmade_out_box_per_90: req.body.stats?.goalkeeping?.savesmade_out_box_per_90 || "N/A",
                penalties_faced_per_90: req.body.stats?.goalkeeping?.penalties_faced_per_90 || "N/A",
                penalties_saved_per_90: req.body.stats?.goalkeeping?.penalties_saved_per_90 || "N/A",
              },

              // Goals Stats
              goals: {
                goals: req.body.stats?.goals?.goals || "N/A",
                homegoals: req.body.stats?.goals?.homegoals || "N/A",
                awaygoals: req.body.stats?.goals?.awaygoals || "N/A",
                winninggoals: req.body.stats?.goals?.winninggoals || "N/A",
                nonpenaltygoals: req.body.stats?.goals?.nonpenaltygoals || "N/A",
                penaltygoals: req.body.stats?.goals?.penaltygoals || "N/A",
                goalsfrominsidebox: req.body.stats?.goals?.goalsfrominsidebox || "N/A",
                goalsfromoutsidebox: req.body.stats?.goals?.goalsfromoutsidebox || "N/A",
                rightfootgoals: req.body.stats?.goals?.rightfootgoals || "N/A",
                leftfootgoals: req.body.stats?.goals?.leftfootgoals || "N/A",
                headergoals: req.body.stats?.goals?.headergoals || "N/A",
                othergoals: req.body.stats?.goals?.othergoals || "N/A",
                conv_rate: req.body.stats?.goals?.conv_rate || "N/A",
                goals_per_90: req.body.stats?.goals?.goals_per_90 || "N/A",
                homegoals_per_90: req.body.stats?.goals?.homegoals_per_90 || "N/A",
                awaygoals_per_90: req.body.stats?.goals?.awaygoals_per_90 || "N/A",
                winninggoals_per_90: req.body.stats?.goals?.winninggoals_per_90 || "N/A",
                nonpenaltygoals_per_90: req.body.stats?.goals?.nonpenaltygoals_per_90 || "N/A",
                penaltygoals_per_90: req.body.stats?.goals?.penaltygoals_per_90 || "N/A",
                goalsfrominsidebox_per_90: req.body.stats?.goals?.goalsfrominsidebox_per_90 || "N/A",
                goalsfromoutsidebox_per_90: req.body.stats?.goals?.goalsfromoutsidebox_per_90 || "N/A",
                rightfootgoals_per_90: req.body.stats?.goals?.rightfootgoals_per_90 || "N/A",
                leftfootgoals_per_90: req.body.stats?.goals?.leftfootgoals_per_90 || "N/A",
                headergoals_per_90: req.body.stats?.goals?.headergoals_per_90 || "N/A",
                othergoals_per_90: req.body.stats?.goals?.othergoals_per_90 || "N/A",
              },

              // Passing Stats
              passing: {
                passatmpt: req.body.stats?.passing?.passatmpt || "N/A",
                passcomp: req.body.stats?.passing?.passcomp || "N/A",
                assists: req.body.stats?.passing?.assists || "N/A",
                chances: req.body.stats?.passing?.chances || "N/A",
                pass_per: req.body.stats?.passing?.pass_per || "N/A",
                keypasses: req.body.stats?.passing?.keypasses || "N/A",
                pass_from_throwins: req.body.stats?.passing?.pass_from_throwins || "N/A",
                pass_from_crosses: req.body.stats?.passing?.pass_from_crosses || "N/A",
                through_balls: req.body.stats?.passing?.through_balls || "N/A",
                longballs: req.body.stats?.passing?.longballs || "N/A",
                smartpasses: req.body.stats?.passing?.smartpasses || "N/A",
                smartpasses_per: req.body.stats?.passing?.smartpasses_per || "N/A",
                assist_per_90: req.body.stats?.passing?.assist_per_90 || "N/A",
                pass_completed_final_third: req.body.stats?.passing?.pass_completed_final_third || "N/A",
                progressive_passes_received: req.body.stats?.passing?.progressive_passes_received || "N/A",
                passcomp_per: req.body.stats?.passing?.passcomp_per || "N/A",
                assists_per_90: req.body.stats?.passing?.assists_per_90 || "N/A",
                chances_per_90: req.body.stats?.passing?.chances_per_90 || "N/A",
                keypasses_per_90: req.body.stats?.passing?.keypasses_per_90 || "N/A",
                pass_from_throwins_per_90: req.body.stats?.passing?.pass_from_throwins_per_90 || "N/A",
                pass_from_crosses_per_90: req.body.stats?.passing?.pass_from_crosses_per_90 || "N/A",
                through_balls_per_90: req.body.stats?.passing?.through_balls_per_90 || "N/A",
                longballs_per_90: req.body.stats?.passing?.longballs_per_90 || "N/A",
                smartpasses_per_90: req.body.stats?.passing?.smartpasses_per_90 || "N/A",
                pass_completed_final_third_per_90: req.body.stats?.passing?.pass_completed_final_third_per_90 || "N/A",
                progressive_passes_received_per_90: req.body.stats?.passing?.progressive_passes_received_per_90 || "N/A",
              },

              // Possession Stats
              possession: {
                poss_lost: req.body.stats?.possession?.poss_lost || "N/A",
                poss_won: req.body.stats?.possession?.poss_won || "N/A",
                poss_recovery: req.body.stats?.possession?.poss_recovery || "N/A",
                def3rd_pressure: req.body.stats?.possession?.def3rd_pressure || "N/A",
                mid3rd_pressure: req.body.stats?.possession?.mid3rd_pressure || "N/A",
                att3rd_pressure: req.body.stats?.possession?.att3rd_pressure || "N/A",
                poss_lost_per_90: req.body.stats?.possession?.poss_lost_per_90 || "N/A",
                poss_won_per_90: req.body.stats?.possession?.poss_won_per_90 || "N/A",
                poss_recovery_per_90: req.body.stats?.possession?.poss_recovery_per_90 || "N/A",
                def3rd_pressure_per_90: req.body.stats?.possession?.def3rd_pressure_per_90 || "N/A",
                mid3rd_pressure_per_90: req.body.stats?.possession?.mid3rd_pressure_per_90 || "N/A",
                att3rd_pressure_per_90: req.body.stats?.possession?.att3rd_pressure_per_90 || "N/A",
              },


          }
      };

      const player = new Player(playerData);
      await player.save();
      res.status(201).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});



// Get all players
router.get('/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).send(players);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a specific player by ID
router.get('/players/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send(player);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a specific player by Name
router.get('/players/:name', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Birth Date
router.get('/players/:birthdate', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Position
router.get('/players/:position', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Nationality
router.get('/players/:nationality', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Email
router.get('/players/:email', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Get a specific player by Phone
router.get('/players/:phone', async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Update a player by ID
router.put('/players/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send(player);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a player by Name
router.put('/players/:name', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Birth Date
router.put('/players/:birthdate', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Position
router.put('/players/:position', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Nationality
router.put('/players/:nationality', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by email
router.put('/players/:email', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Update a player by Phone Number
router.put('/players/:phone', async (req, res) => {
  try {
      const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(400).send(error);
  }
});

// Delete a player by ID
router.delete('/players/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).send({ message: 'Player not found' });
        }
        res.status(200).send({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
