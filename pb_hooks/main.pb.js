onRealtimeDisconnectRequest((e) => {
    console.log('DISCONNECT')
    console.log(e.client.id())

    const record = $app.dao().findFirstRecordByData("active_mouse", "realtime_id", e.client.id());
    $app.dao().deleteRecord(record);  

})