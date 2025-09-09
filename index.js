function superbowlWin(records) {
  const winningRecord = records.find(function(record) {
    return record.result === "W";
  });
  
  if (winningRecord) {
    return winningRecord.year;
  } else {
    return undefined;
  }
}