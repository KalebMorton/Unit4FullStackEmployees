import express from "express";
const router = express.Router();
export default router;

import { getEmployees, getEmployee, updateEmployee, deleteEmployee, createEmployee } from "../db/queries/employees.js";

// TODO: this file!

router.route("/")
.get(async (req, res) => {
    res.status(200).send(await getEmployees())
})
.post((req, res) => {
    if (!req.body) return res.status(400).send("request body is required")
    if (!req.body.name) return res.status(400).send("name is required")

    createEmployee(req.body.name, req.body.birthday, req.body.salary)
    res.status(201).send(`Added ${req.body.name} to employees`)
})

router.route("/:id")
.get(async (req, res) => {
    const singleEmployee = await getEmployee(Number(req.params.id))
    if (singleEmployee){
        res.status(200).send(singleEmployee)
    }else(
        res.status(404).send("employee not found")
    )
}).delete(async (req, res) => {
    const singleEmployee = await getEmployee(Number(req.params.id))
    if (singleEmployee){
        deleteEmployee(Number(req.params.id))
        res.status(204).send("employee deleted")
    }else(
        res.status(404).send("employee not found")
    )
}).put(async (req, res) => {
    if (!req.body) return res.status(400).send("request body is required")
    if (!req.body.name) return res.status(400).send("name is required")
    
    const singleEmployee = await getEmployee(Number(req.params.id))
    if (singleEmployee){
        updateEmployee(Number(req.params.id), req.body.name, req.body.birthday, req.body.salary)
        res.status(200).send("employee updated")
    }else(
        res.status(404).send("employee not found")
    )
})