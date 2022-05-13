import Campaign from '../models/CampaignModel.js'
import db from '../controllers/DatabaseController.js'

class CampaignContoller {

	async create(req, res) {
		try {
			const campaign = new Campaign(req.body);
			let sql = `INSERT INTO campaigns(name,owner_id,date_created) VALUES('${campaign.name}',${campaign.owner},'${campaign.createdDate}');`;
			console.log(sql);
			await db.run(sql);
			console.log('Кампания создана');
			res.json(campaign);
		} catch (error) {
			res.status(500).json(error)
		}
	}
	async getAll(req, res) {

	}
	async getOne(req, res) {

	}
	async update(req, res) {

	}
	async delete(req, res) {

	}

}

export default new CampaignContoller();