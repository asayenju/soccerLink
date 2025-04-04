const Player = require('../models/Player');

// Create a new player
exports.addPlayer = async (req, res) => {
  try {
      // Check if the name field is present
      const { name, birthdate, position, nationality, email, phone, stats, scout } = req.body;
      if (!name) {
          return res.status(400).send({ message: 'Name is required.' });
      }

      // Set default values for stats
      const playerData = {
          ...req.body,
          stats: {
              appearances: {
                  games: req.body.stats?.appearances?.games || 0,
                  minutes: req.body.stats?.appearances?.minutes || 0,
                  starts: req.body.stats?.appearances?.starts || 0,
                  sub_off: req.body.stats?.appearances?.sub_off || 0,
                  sub_on: req.body.stats?.appearances?.sub_on || 0,
              },
              defense: {
                  clearances: req.body.stats?.defense?.clearances || 0,
                  interceptions: req.body.stats?.defense?.interceptions || 0,
                  blockedShots: req.body.stats?.defense?.blockedShots || 0,
                  blockedShots_per: req.body.stats?.defense?.blockedShots_per || 0,
                  cleanSheets: req.body.stats?.defense?.cleanSheets || 0,
                  goalsConceded: req.body.stats?.defense?.goalsConceded || 0,
                  goalsConceded_per: req.body.stats?.defense?.goalsConceded_per || 0,
                  goalsConcededInsideBox: req.body.stats?.defense?.goalsConcededInsideBox || 0,
                  goalsConcededInsideBox_per: req.body.stats?.defense?.goalsConcededInsideBox_per || 0,
                  goalsConcededOutsideBox: req.body.stats?.defense?.goalsConcededOutsideBox || 0,
                  goalsConcededOutsideBox_per: req.body.stats?.defense?.goalsConcededOutsideBox_per || 0,
                  ownGoals: req.body.stats?.defense?.ownGoals || 0,
                  ownGoals_per: req.body.stats?.defense?.ownGoals_per || 0,
                  penaltyGoalsConceded: req.body.stats?.defense?.penaltyGoalsConceded || 0,
                  penaltyGoalsConceded_per: req.body.stats?.defense?.penaltyGoalsConceded_per || 0,
                  shotsOnTargetFaced: req.body.stats?.defense?.shotsOnTargetFaced || 0,
                  shotsOnTargetFacedInsideBox: req.body.stats?.defense?.shotsOnTargetFacedInsideBox || 0,
                  shotsOnTargetFacedInsideBox_per: req.body.stats?.defense?.shotsOnTargetFacedInsideBox_per || 0,
                  shotsOnTargetFacedOutsideBox: req.body.stats?.defense?.shotsOnTargetFacedOutsideBox || 0,
                  shotsOnTargetFacedOutsideBox_per: req.body.stats?.defense?.shotsOnTargetFacedOutsideBox_per || 0,
                  clearances_per_90: req.body.stats?.defense?.clearances_per_90 || 0,
                  interceptions_per_90: req.body.stats?.defense?.interceptions_per_90 || 0,
                  blockedShots_per_90: req.body.stats?.defense?.blockedShots_per_90 || 0,
                  cleanSheets_per_90: req.body.stats?.defense?.cleanSheets_per_90 || 0,
                  goalsConceded_per_90: req.body.stats?.defense?.goalsConceded_per_90 || 0,
                  goalsConcededInsideBox_per_90: req.body.stats?.defense?.goalsConcededInsideBox_per_90 || 0,
                  goalsConcededOutsideBox_per_90: req.body.stats?.defense?.goalsConcededOutsideBox_per_90 || 0,
                  ownGoals_per_90: req.body.stats?.defense?.ownGoals_per_90 || 0,
                  penaltyGoalsConceded_per_90: req.body.stats?.defense?.penaltyGoalsConceded_per_90 || 0,
                  shotsOnTargetFaced_per_90: req.body.stats?.defense?.shotsOnTargetFaced_per_90 || 0,
                  shotsOnTargetFacedInsideBox_per_90: req.body.stats?.defense?.shotsOnTargetFacedInsideBox_per_90 || 0,
                  shotsOnTargetFacedOutsideBox_per_90: req.body.stats?.defense?.shotsOnTargetFacedOutsideBox_per_90 || 0,
              },
              discipline: {
                  totalCards: req.body.stats?.discipline?.totalCards || 0,
                  yellowCards: req.body.stats?.discipline?.yellowCards || 0,
                  redCards: req.body.stats?.discipline?.redCards || 0,
                  totalCards_per_90: req.body.stats?.discipline?.totalCards_per_90 || 0,
                  yellowCards_per_90: req.body.stats?.discipline?.yellowCards_per_90 || 0,
                  redCards_per_90: req.body.stats?.discipline?.redCards_per_90 || 0,
              },
              
              // Duels Stats
              duels: {
                takeOnsOverrun: req.body.stats?.duels?.takeOnsOverrun || 0,
                duelsContested: req.body.stats?.duels?.duelsContested || 0,
                tacklesMade: req.body.stats?.duels?.tacklesMade || 0,
                foulsFromTackleAttempts: req.body.stats?.duels?.foulsFromTackleAttempts || 0,
                lastManTacklesMade: req.body.stats?.duels?.lastManTacklesMade || 0,
                takeOnsCompleted: req.body.stats?.duels?.takeOnsCompleted || 0,
                takeOnSuccessPercentage: req.body.stats?.duels?.takeOnSuccessPercentage || 0,
                foulsWon: req.body.stats?.duels?.foulsWon || 0,
                fouls: req.body.stats?.duels?.fouls || 0,
                penaltiesWon: req.body.stats?.duels?.penaltiesWon || 0,
                aerialDuelsContested: req.body.stats?.duels?.aerialDuelsContested || 0,
                aerialDuelsWon: req.body.stats?.duels?.aerialDuelsWon || 0,
                aerialDuelSuccessPercentage: req.body.stats?.duels?.aerialDuelSuccessPercentage || 0,
                groundDuelsContested: req.body.stats?.duels?.groundDuelsContested || 0,
                groundDuelsWon: req.body.stats?.duels?.groundDuelsWon || 0,
                duelsWon: req.body.stats?.duels?.duelsWon || 0,
                duelsWon_per: req.body.stats?.duels?.duelsWon_per || 0,
                groundDuelSuccessPercentage: req.body.stats?.duels?.groundDuelSuccessPercentage || 0,
                takeOnsOverrun_per_90: req.body.stats?.duels?.takeOnsOverrun_per_90 || 0,
                duelsContested_per_90: req.body.stats?.duels?.duelsContested_per_90 || 0,
                tacklesMade_per_90: req.body.stats?.duels?.tacklesMade_per_90 || 0,
                foulsFromTackleAttempts_per_90: req.body.stats?.duels?.foulsFromTackleAttempts_per_90 || 0,
                lastManTacklesMade_per_90: req.body.stats?.duels?.lastManTacklesMade_per_90 || 0,
                takeOnsCompleted_per_90: req.body.stats?.duels?.takeOnsCompleted_per_90 || 0,
                takeOnSuccessPercentage_per_90: req.body.stats?.duels?.takeOnSuccessPercentage_per_90 || 0,
                foulsWon_per_90: req.body.stats?.duels?.foulsWon_per_90 || 0,
                fouls_per_90: req.body.stats?.duels?.fouls_per_90 || 0,
                penaltiesWon_per_90: req.body.stats?.duels?.penaltiesWon_per_90 || 0,
                aerialDuelsContested_per_90: req.body.stats?.duels?.aerialDuelsContested_per_90 || 0,
                aerialDuelsWon_per_90: req.body.stats?.duels?.aerialDuelsWon_per_90 || 0,
                aerialDuelSuccessPercentage_per_90: req.body.stats?.duels?.aerialDuelSuccessPercentage_per_90 || 0,
                groundDuelsContested_per_90: req.body.stats?.duels?.groundDuelsContested_per_90 || 0,
                groundDuelsWon_per_90: req.body.stats?.duels?.groundDuelsWon_per_90 || 0,
                duelsWon_per_90: req.body.stats?.duels?.duelsWon_per_90 || 0,
                groundDuelSuccessPercentage_per_90: req.body.stats?.duels?.groundDuelSuccessPercentage_per_90 || 0,
              },

              // Goalkeeping Stats
              goalkeeping: {
                shotsfaced: req.body.stats?.goalkeeping?.shotsfaced || 0,
                savesmade: req.body.stats?.goalkeeping?.savesmade || 0,
                savesmade_in_box: req.body.stats?.goalkeeping?.savesmade_in_box || 0,
                savesmade_out_box: req.body.stats?.goalkeeping?.savesmade_out_box || 0,
                penalties_faced: req.body.stats?.goalkeeping?.penalties_faced || 0,
                penalties_saved: req.body.stats?.goalkeeping?.penalties_saved || 0,
                shotsfaced_per_90: req.body.stats?.goalkeeping?.shotsfaced_per_90 || 0,
                savesmade_per_90: req.body.stats?.goalkeeping?.savesmade_per_90 || 0,
                savesmade_in_box_per_90: req.body.stats?.goalkeeping?.savesmade_in_box_per_90 || 0,
                savesmade_out_box_per_90: req.body.stats?.goalkeeping?.savesmade_out_box_per_90 || 0,
                penalties_faced_per_90: req.body.stats?.goalkeeping?.penalties_faced_per_90 || 0,
                penalties_saved_per_90: req.body.stats?.goalkeeping?.penalties_saved_per_90 || 0,
              },

              // Goals Stats
              goals: {
                goals: req.body.stats?.goals?.goals || 0,
                homegoals: req.body.stats?.goals?.homegoals || 0,
                awaygoals: req.body.stats?.goals?.awaygoals || 0,
                winninggoals: req.body.stats?.goals?.winninggoals || 0,
                nonpenaltygoals: req.body.stats?.goals?.nonpenaltygoals || 0,
                penaltygoals: req.body.stats?.goals?.penaltygoals || 0,
                goalsfrominsidebox: req.body.stats?.goals?.goalsfrominsidebox || 0,
                goalsfromoutsidebox: req.body.stats?.goals?.goalsfromoutsidebox || 0,
                rightfootgoals: req.body.stats?.goals?.rightfootgoals || 0,
                leftfootgoals: req.body.stats?.goals?.leftfootgoals || 0,
                headergoals: req.body.stats?.goals?.headergoals || 0,
                othergoals: req.body.stats?.goals?.othergoals || 0,
                conv_rate: req.body.stats?.goals?.conv_rate || 0,
                goals_per_90: req.body.stats?.goals?.goals_per_90 || 0,
                homegoals_per_90: req.body.stats?.goals?.homegoals_per_90 || 0,
                awaygoals_per_90: req.body.stats?.goals?.awaygoals_per_90 || 0,
                winninggoals_per_90: req.body.stats?.goals?.winninggoals_per_90 || 0,
                nonpenaltygoals_per_90: req.body.stats?.goals?.nonpenaltygoals_per_90 || 0,
                penaltygoals_per_90: req.body.stats?.goals?.penaltygoals_per_90 || 0,
                goalsfrominsidebox_per_90: req.body.stats?.goals?.goalsfrominsidebox_per_90 || 0,
                goalsfromoutsidebox_per_90: req.body.stats?.goals?.goalsfromoutsidebox_per_90 || 0,
                rightfootgoals_per_90: req.body.stats?.goals?.rightfootgoals_per_90 || 0,
                leftfootgoals_per_90: req.body.stats?.goals?.leftfootgoals_per_90 || 0,
                headergoals_per_90: req.body.stats?.goals?.headergoals_per_90 || 0,
                othergoals_per_90: req.body.stats?.goals?.othergoals_per_90 || 0,
              },

              // Passing Stats
              passing: {
                passatmpt: req.body.stats?.passing?.passatmpt || 0,
                passcomp: req.body.stats?.passing?.passcomp || 0,
                assists: req.body.stats?.passing?.assists || 0,
                chances: req.body.stats?.passing?.chances || 0,
                pass_per: req.body.stats?.passing?.pass_per || 0,
                keypasses: req.body.stats?.passing?.keypasses || 0,
                pass_from_throwins: req.body.stats?.passing?.pass_from_throwins || 0,
                pass_from_crosses: req.body.stats?.passing?.pass_from_crosses || 0,
                through_balls: req.body.stats?.passing?.through_balls || 0,
                longballs: req.body.stats?.passing?.longballs || 0,
                smartpasses: req.body.stats?.passing?.smartpasses || 0,
                smartpasses_per: req.body.stats?.passing?.smartpasses_per || 0,
                assist_per_90: req.body.stats?.passing?.assist_per_90 || 0,
                pass_completed_final_third: req.body.stats?.passing?.pass_completed_final_third || 0,
                progressive_passes_received: req.body.stats?.passing?.progressive_passes_received || 0,
                passcomp_per: req.body.stats?.passing?.passcomp_per || 0,
                assists_per_90: req.body.stats?.passing?.assists_per_90 || 0,
                chances_per_90: req.body.stats?.passing?.chances_per_90 || 0,
                keypasses_per_90: req.body.stats?.passing?.keypasses_per_90 || 0,
                pass_from_throwins_per_90: req.body.stats?.passing?.pass_from_throwins_per_90 || 0,
                pass_from_crosses_per_90: req.body.stats?.passing?.pass_from_crosses_per_90 || 0,
                through_balls_per_90: req.body.stats?.passing?.through_balls_per_90 || 0,
                longballs_per_90: req.body.stats?.passing?.longballs_per_90 || 0,
                smartpasses_per_90: req.body.stats?.passing?.smartpasses_per_90 || 0,
                pass_completed_final_third_per_90: req.body.stats?.passing?.pass_completed_final_third_per_90 || 0,
                progressive_passes_received_per_90: req.body.stats?.passing?.progressive_passes_received_per_90 || 0,
              },

              // Possession Stats
              possession: {
                poss_lost: req.body.stats?.possession?.poss_lost || 0,
                poss_won: req.body.stats?.possession?.poss_won || 0,
                poss_recovery: req.body.stats?.possession?.poss_recovery || 0,
                def3rd_pressure: req.body.stats?.possession?.def3rd_pressure || 0,
                mid3rd_pressure: req.body.stats?.possession?.mid3rd_pressure || 0,
                att3rd_pressure: req.body.stats?.possession?.att3rd_pressure || 0,
                poss_lost_per_90: req.body.stats?.possession?.poss_lost_per_90 || 0,
                poss_won_per_90: req.body.stats?.possession?.poss_won_per_90 || 0,
                poss_recovery_per_90: req.body.stats?.possession?.poss_recovery_per_90 || 0,
                def3rd_pressure_per_90: req.body.stats?.possession?.def3rd_pressure_per_90 || 0,
                mid3rd_pressure_per_90: req.body.stats?.possession?.mid3rd_pressure_per_90 || 0,
                att3rd_pressure_per_90: req.body.stats?.possession?.att3rd_pressure_per_90 || 0,
              },
              shooting: {
                totalshots: req.body.stats?.shooting?.totalshots || 0,
                shotson_target: req.body.stats?.shooting?.shotson_target|| 0,
                shotsoff_target: req.body.stats?.shooting?.shotsoff_target|| 0,
                shots_blocked: req.body.stats?.shooting?.shots_blocked|| 0,
                shots_setpieces: req.body.stats?.shooting?.shots_setpieces|| 0,
                penalties: req.body.stats?.shooting?.penalties || 0,
                woodwork: req.body.stats?.shooting?.woodwork || 0,
                totalshots_per_90: req.body.stats?.shooting?.totalshots_per_90 || 0,
                shotson_target_per_90: req.body.stats?.shooting?.shotson_target_per_90|| 0,
                shotsoff_target_per_90: req.body.stats?.shooting?.shotsoff_target_per_90|| 0,
                shots_blocked_per_90: req.body.stats?.shooting?.shots_blocked_per_90|| 0,
                shots_setpieces_per_90: req.body.stats?.shooting?.shots_setpieces_per_90|| 0,
                penalties_per_90: req.body.stats?.shooting?.penalties_per_90 || 0,
                woodwork_per_90: req.body.stats?.shooting?.woodwork_per_90 || 0,
                shots_accuracy: req.body.stats?.shooting?.shots_accuracy || 0
              }

          }
      };

      const player = new Player(playerData);
      await player.save();
      res.status(201).send(player);
    } catch (error) {
      console.error('Error adding player:', error.message);  // Log the error message
      console.error('Stack Trace:', error.stack);  // Log the stack trace for more details
      res.status(500).send({ message: 'Failed to add player.', error: error.message });
  }
};



// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
      const players = await Player.find();
      res.status(200).send(players);
  } catch (error) {
      console.error('Error fetching players:', error);
      res.status(500).send(error);
  }
};

// Get a specific player by ID
exports.getPlayerById = async (req, res) => {
  try {
      const player = await Player.findById(req.params.id);
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send(player);
  } catch (error) {
      res.status(500).send(error);
  }
};

// Get a specific player by Name
exports.getPlayerByName = async (req, res) => {
  try {
      const playerName = req.params.name; // Get the name from the route parameter
      const player = await Player.findOne({ name: playerName }); // Find the player by name

      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }

      res.status(200).send(player);
  } catch (error) {
      res.status(500).send({ message: 'Error retrieving player', error });
  }
};

// Get a specific player by Birth Date
exports.getPlayerByBirthDate = async (req, res) => {
  try {
      const birthdate = req.params.birthdate; // Get the birthdate from the route parameter
      const player = await Player.findOne({ birthdate: birthdate }); // Find the player by birthdate

      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }

      res.status(200).send(player);
  } catch (error) {
      res.status(500).send({ message: 'Error retrieving player', error });
  }
};

// Get a specific player by Position
exports.getPlayerByPosition = async (req, res) => {
  try {
      const position = req.params.position; // Get the position from the route parameter
      const player = await Player.findOne({ position: position }); // Find the player by position

      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }

      res.status(200).send(player);
  } catch (error) {
      res.status(500).send({ message: 'Error retrieving player', error });
  }
};

// Get a specific player by Nationality
exports.getPlayerByNationality = async (req, res) => {
  try {
      const nationality = req.params.nationality; // Get the nationality from the route parameter
      const player = await Player.findOne({ nationality: nationality }); // Find the player by nationality

      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }

      res.status(200).send(player);
  } catch (error) {
      res.status(500).send({ message: 'Error retrieving player', error });
  }
};

// Get a specific player by Email
exports.getPlayerByEmail = async (req, res) => {
  try {
      const email = req.params.email; // Get the email from the route parameter
      const player = await Player.findOne({ email: email }); // Find the player by email

      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }

      res.status(200).send(player);
  } catch (error) {
      res.status(500).send({ message: 'Error retrieving player', error });
  }
};

// Get a specific player by Phone
exports.getPlayerByPhone = async (req, res) => {
  try {
      const phone = req.params.phone; // Get the phone from the route parameter
      const player = await Player.findOne({ phone: phone }); // Find the player by phone

      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }

      res.status(200).send(player);
  } catch (error) {
      res.status(500).send({ message: 'Error retrieving player', error });
  }
};

/*
const buildUpdateQuery = (basePath, data) => {
  let updateQuery = {};

  for (const key in data) {
    if (typeof data[key] === 'object' && data[key] !== null && !Array.isArray(data[key])) {
      // Recursively handle nested objects
      Object.assign(updateQuery, buildUpdateQuery(`${basePath}.${key}`, data[key]));
    } else {
      // Assign value for non-object fields (leaf nodes)
      updateQuery[`${basePath}.${key}`] = data[key];
    }
  }

  return updateQuery;
};


exports.updatePlayerByName = async (req, res) => {
  try {
    const updateData = req.body.stats || {};

    // Build a dynamic query for nested fields
    let updateQuery = {};

    // Handle dynamic updates for each category in 'stats'
    if (updateData.appearances) {
      Object.assign(updateQuery, buildUpdateQuery('stats.appearances', updateData.appearances));
    }
    if (updateData.possession) {
      Object.assign(updateQuery, buildUpdateQuery('stats.possession', updateData.possession));
    }
    if (updateData.defense) {
      Object.assign(updateQuery, buildUpdateQuery('stats.defense', updateData.defense));
    }
    if (updateData.discipline) {
      Object.assign(updateQuery, buildUpdateQuery('stats.discipline', updateData.discipline));
    }
    if (updateData.passing) {
      Object.assign(updateQuery, buildUpdateQuery('stats.passing', updateData.passing));
    }
    if (updateData.duels) {
      Object.assign(updateQuery, buildUpdateQuery('stats.duels', updateData.duels));
    }
    if (updateData.shooting) {
      Object.assign(updateQuery, buildUpdateQuery('stats.shooting', updateData.shooting));
    }
    if (updateData.goals) {
      Object.assign(updateQuery, buildUpdateQuery('stats.goals', updateData.goals));
    }
    if (updateData.goalkeeping) {
      Object.assign(updateQuery, buildUpdateQuery('stats.goalkeeping', updateData.goalkeeping));
    }

    // Handle general stats updates
    if (req.body.stats) {
      Object.assign(updateQuery, buildUpdateQuery('stats', req.body.stats));
    }

    // Handle non-stats fields like name, position, nationality, etc.
    if (req.body.name) updateQuery['name'] = req.body.name;
    if (req.body.position) updateQuery['position'] = req.body.position;
    if (req.body.nationality) updateQuery['nationality'] = req.body.nationality;
    if (req.body.age) updateQuery['age'] = req.body.age;

    // Find and update player document
    const player = await Player.findOneAndUpdate(
      { name: req.params.name },
      { $set: updateQuery },
      { new: true, runValidators: true }
    );

    if (!player) {
      return res.status(404).send({ message: 'Player not found' });
    }

    res.status(200).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
};

*/

function buildUpdateQuery(fieldPath, nestedData) {
  const updateQuery = {};
  for (const [key, value] of Object.entries(nestedData)) {
    updateQuery[`${fieldPath}.${key}`] = value;  // Fixed variable name
  }
  return updateQuery;
}

exports.handleStatsUpdate = (updateData) => {
  const updateQuery = {};

  // First check if updateData has stats (your data structure requires this)
  if (!updateData.stats) {
    console.warn("No 'stats' property in update data");
    return updateQuery;
  }

  const { stats } = updateData;  // Destructure the stats object

  // Now check each category within stats
  if (stats.appearances) {
    Object.assign(updateQuery, buildUpdateQuery('stats.appearances', stats.appearances));
  }
  if (stats.shooting) {
    Object.assign(updateQuery, buildUpdateQuery('stats.shooting', stats.shooting));
  }
  if (stats.passing) {
    Object.assign(updateQuery, buildUpdateQuery('stats.passing', stats.passing));
  }
  if (stats.defense) {
    Object.assign(updateQuery, buildUpdateQuery('stats.defense', stats.defense));
  }
  if (stats.discipline) {
    Object.assign(updateQuery, buildUpdateQuery('stats.discipline', stats.discipline));
  }
  if (stats.duels) {
    Object.assign(updateQuery, buildUpdateQuery('stats.duels', stats.duels));
  }
  if (stats.goalkeeping) {
    Object.assign(updateQuery, buildUpdateQuery('stats.goalkeeping', stats.goalkeeping));
  }
  if (stats.goals) {
    Object.assign(updateQuery, buildUpdateQuery('stats.goals', stats.goals));
  }
  if (stats.possession) {
    Object.assign(updateQuery, buildUpdateQuery('stats.possession', stats.possession));
  }

  console.log('Generated Update Query:', updateQuery);
  return updateQuery;
};

exports.updatePlayerStats = async (req, res) => {
  try {
    console.log("--- NEW REQUEST ---");
    console.log("Player ID:", req.params.id);
    console.log("Request Body:", JSON.stringify(req.body, null, 2));
    
    const updateQuery = exports.handleStatsUpdate(req.body);
    console.log("Generated Update Query:", JSON.stringify(updateQuery, null, 2));

    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: updateQuery },
      { new: true }
    );

    console.log("Updated Player:", updatedPlayer);
    res.status(200).json(updatedPlayer);
  } catch (error) {
    console.error("Full Error:", error);
    res.status(500).json({ message: error.message });
  }
};
// Delete a player by ID
exports.deletePlayer = async (req, res) => {
  try {
      const player = await Player.findByIdAndDelete(req.params.id); // Find and delete by _id
      if (!player) {
          return res.status(404).send({ message: 'Player not found' });
      }
      res.status(200).send({ message: 'Player deleted successfully' });
  } catch (error) {
      res.status(500).send(error);
  }
};

