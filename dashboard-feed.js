class DashboardFeedService {
    static getCompanyFeedByCompanyId(companyId) {
        return fetch(`/feeds/${companyId}.json`).then(function(data){
            let feed = data.json();
            delete feed.segments;
            return feed;
        }).then(function(data){
            delete data.segments;
            return data;
        });
    }
    static getCompanyFeedByCompanyIdAndSegment(companyId, segment) {
        return fetch(`/feeds/${companyId}.json`).then(function(data){
            let feed = data.json();
            return feed;
        }).then(function(data){
            return data.segments[`${segment}_segments`];
        });
        
    }
    
}