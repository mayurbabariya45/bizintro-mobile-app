const regionContainingPoints = (point) => {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;

    // init first point
    (() => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })();
  
  
    // calculate rect
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    
    // const midX = (minX + maxX) / 2;
    // const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX);
    const deltaY = (maxY - minY);
    console.log({deltaX, deltaY})
    return {
      // latitude: midX,
      // longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
}

export const getDelta = (point,distance) => {
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;

  const latitudeDelta =distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = distance / (oneDegreeOfLatitudeInMeters * Math.cos(point.latitude * (Math.PI / 180)));

  return result = {
      latitudeDelta,
      longitudeDelta,
  }
}
export default regionContainingPoints;